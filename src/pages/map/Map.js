import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import paramData from "./parameter-data.json";
import { mapTileCoords } from "./utils.js";
import axios from "axios";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4);
  const [lat] = useState(54);
  const [zoom] = useState(5);
  const [API_KEY] = useState("OXjioEfDUH0gP7RYRS4S");

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'bottom-right');
    map.current.addControl(new maplibregl.GeolocateControl(), 'bottom-right');
    populateParameterFilters();

    map.current.popups = [];

    map.current.on('load', function () {

      const searchInput = document.getElementById('search_input');
      const searchResults = document.getElementById('search_results');
      const searchButton = document.getElementById('search_button');

      // Make the search input visible when it is focused
      searchInput.addEventListener("focus", () => {
        searchResults.style.display = "block";
      });

      // Hide the search results when the user clicks outside of the search input or search results
      document.addEventListener("click", (event) => {
        if (
          !searchInput.contains(event.target) &&
          !searchResults.contains(event.target) &&
          document.activeElement !== searchInput
        ) {
          searchResults.style.display = "none";
        }
      });

      // Populate search results every time the search input changes (debounced to 1 second)
      let timeoutId;
      searchInput.addEventListener("input", () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (searchInput.value !== "") populateSearchResults();
        }, 1000);
      });

      // Add keydown events to search input
      searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          searchButton.click();
          searchInput.blur();
        } else if (event.key === "Escape") {
          searchInput.blur();
        }
      });

      // Add search results layer
      map.current.addSource("search-results", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.current.addLayer({
        id: "point-result",
        type: "circle",
        source: "search-results",
        paint: {
          "circle-radius": 8,
          "circle-color": "#B42222",
          "circle-opacity": 0.5,
        },
        filter: ["==", "$type", "Point"],
      });
    });
  });

  // Fetch map records by parameters
  async function fetchMapRecords() {
    // Get all checked water body types
    const waterBodyTypes = Array.from(
      document.querySelectorAll('input[type="checkbox"].body_filter:checked')
    )
      .map((checkbox) => checkbox.nextElementSibling.textContent)
      .join(",");

    // Get all checked source types
    const sourceTypes = Array.from(
      document.querySelectorAll('input[type="checkbox"].source_filter:checked')
    )
      .map((checkbox) => checkbox.nextElementSibling.textContent)
      .join(",");

    // Get parameter name
    const parameterName = document.getElementById("param_filter").value;

    const params = {
      sourceTypes: sourceTypes,
      waterBodyTypes: waterBodyTypes,
      parameterName: parameterName,
    };

    console.log("params: " + params);

    const response = await axios.get(
      "http://localhost:8080/maprecordsbyparams",
      { params }
    );

    console.log(response.data);
    return response.data;
  }

  // Search for a place
  function handleSearch() {
    const searchInput = document.getElementById("search_input").value;
    searchPlace(searchInput).then((results) => {
      console.log(results);
      map.current.getSource("search-results").setData(results);
      if (results.features[0]) {
        map.current.fitBounds(results.features[0].bbox, { maxZoom: 19 });
      }
    });
  }

  // Populate a list of location search results from a search query
  function populateSearchResults() {
    var searchResults = document.getElementById("search_results");
    const searchInput = document.getElementById("search_input");
    searchPlace(searchInput.value).then((results) => {
      console.log(results);
      map.current.getSource("search-results").setData(results);
      if (results.features[0]) {
        searchResults.innerHTML = "";
        results.features.forEach((res) => {
          searchResults.innerHTML += `<li className='search_item'><a data-bbox='${res["bbox"]}'>${res["place_name"]}</a></li>`;
        });
      }
      const searchResultItems = document
        .getElementById("search_results")
        .getElementsByTagName("a");
      for (var i = 0; i < searchResultItems.length; i++) {
        let item = searchResultItems[i];
        item.addEventListener("click", () => {
          console.log(searchResultItems);
          console.log(item.dataset.bbox);
          map.current.fitBounds(
            item.dataset.bbox.split(",").map((value) => parseFloat(value)),
            { maxZoom: 19 }
          );
          searchResults.style.display = "none";
          searchInput.value = item.innerText;
        });
      }
    });
  }

  // Remove all tile layers from the map
  function clearAllTiles() {
    map.current.popups.forEach((popup) => popup.remove());

    // Remove the samples_tiles layer
    if (map.current.getLayer("samples_tiles")) {
      map.current.removeLayer("samples_tiles");
    }

    // Remove the samples_tiles source
    if (map.current.getSource("samples_tiles")) {
      map.current.removeSource("samples_tiles");
    }

    // Remove samples_circles layer
    if (map.current.getLayer("samples_circles")) {
      map.current.removeLayer("samples_circles");
    }

    // Remove samples_circles source
    if (map.current.getSource("samples_circles")) {
      map.current.removeSource("samples_circles");
    }
  }

  // Add tile layers to the map with retrieved map record data
  async function addTileLayersV2() {
    const records = await fetchMapRecords();

    var circleCollection = {
      'type': 'FeatureCollection',
      'features': []
    };

    var geoJsonData = {
      'type': 'FeatureCollection',
      'features': []
    };
    console.log(JSON.stringify(geoJsonData));
    // log all sources and layers
    console.log(map.current.getStyle().sources);
    console.log(map.current.getStyle().layers);

    records.forEach((record) => {
      //console.log("Record: " + JSON.stringify(record));

      // Get the sample ID
      const tileId = record.openWIMSRecord?.samplingPoint 
                   ?? record.testkitPurchase?.id 
                   ?? record.mapRecord_ID;

      // Calculate fill colour based from parameter-data.json and sample value
      var colourToFill = '#808080';
      const paramJSON = paramData[record.parameterName]['values'];
      for (const key in paramJSON) {
        if (parseFloat(record.parameterValue) >= parseFloat(key)) {
          colourToFill = paramJSON[key];
        }
      }

      // Check if the sample is within coordinate bounds of an existing geoJsonData object if any
      for (var i = 0; i < geoJsonData.features.length; i++) {
        const feature = geoJsonData.features[i];
        if (feature.geometry.coordinates[0].includes([record.longitude, record.latitude])) {
          console.log("Found a match!");
        }
      }

      // Push the tile data to the geoJsonData object
      geoJsonData.features.push({
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [mapTileCoords([record.longitude, record.latitude], 0.25)]
        },
        'properties': {
          'id': tileId,
          'tileColour': colourToFill,
          'sourceType': record.sourceType,
          'waterBodyType': record.waterBodyType,
          'recordedDateTime': record.recordedDateTime,
          'parameterName': record.parameterName,
          'parameterValue': record.parameterValue,
          'parameterUnit': record.parameterUnit,
          'popupHTML': "<b>Sample ID:</b> " + record.mapRecord_ID + "<br/>" +
                        "<b>Source:</b> " + record.sourceType + "<br/>" +
                        "<b>Type:</b> " + record.waterBodyType + "<br/>" +
                        "<b>Sampling Date:</b> "+ record.recordedDateTime + "<br/>" +
                        "<b>Parameter</b> " + record.parameterName + ": " + record.parameterValue + " " + record.parameterUnit + "<br/>" +
                        "<b>Latitude:</b> " + record.latitude + "<br/>" +
                        "<b>Longitude:</b> " + record.longitude + "<br/><br/>" +
                        "<b>Effects On Health:</b> " + "<br/>"
        }
      });

      circleCollection.features.push({
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [record.longitude, record.latitude]
        },
        'properties': {
          'id': tileId
        }
      });

    });

    // Add the tile layers to the map
    map.current.addSource('samples_tiles', {
      'type': 'geojson',
      'data': geoJsonData
    });
    map.current.addLayer({
      'id': 'samples_tiles',
      'type': 'fill',
      'source': 'samples_tiles',
      'layout': {},
      'paint': {
        'fill-color': ['get', 'tileColour'],
        'fill-opacity': 0.5,
      }
    });

    // Add popups to the tiles
    map.current.on("click", "samples_tiles", function(e) {
      var popup = new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(e.features[0].properties.popupHTML)
        .addTo(map.current);
      map.current.popups.push(popup);
    });
    map.current.on("mouseenter", "samples_tiles", function() {
      map.current.getCanvas().style.cursor = "pointer";
    });
    map.current.on("mouseleave", "samples_tiles", function() {
      map.current.getCanvas().style.cursor = "";
    });

    // Add the circle markers to the map
    map.current.addSource('samples_circles', {
      'type': 'geojson',
      'data': circleCollection
    });
    map.current.addLayer({
      'id': 'samples_circles',
      'type': 'circle',
      'source': 'samples_circles',
      'layout': {},
      'paint': {
        'circle-color': '#000000',
        'circle-radius': 4,
        'circle-opacity': 1
      }
    });
  }

  // Search for a place using MapTiler's geocoding API
  async function searchPlace(place) {
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${place}.json?country=gb&key=${API_KEY}`
    );
    const metadata = await response.json();
    return metadata;
  }

  // Populate the parameter filter dropdown
  function populateParameterFilters() {
    const selectFilter = document.getElementById("param_filter");
    for (var param in paramData) {
      const option = document.createElement("option");
      option.value = param;
      option.text = param;
      selectFilter.appendChild(option);
    }
    updateFilterLegend();
  }

  // Update the legend to match the selected parameter
  function updateFilterLegend() {
    const selectFilter = document.getElementById("param_filter");
    const selectedFilter = selectFilter.value;

    const legendText = document.getElementById("legend_text");
    const legendList = document.getElementById("legend_list");
    legendList.innerHTML = "";

    var values = paramData[selectedFilter]["values"];
    var unit = paramData[selectedFilter]["unit"];
    for (var value in values) {
      const legendItem = document.createElement("li");
      legendItem.innerHTML = `<div style="background-color: ${values[value]}"></div>${value}`;
      legendItem.className = "legend_item";
      legendList.appendChild(legendItem);
      legendText.innerHTML = `Legend (${unit})`;
    }
  }

  // Check/uncheck all water body checkboxes
  function checkAllBodyFilters() {
    const waterBodyCheckboxes = document.getElementsByClassName("body_filter");
    const checkAllButton = document.getElementById("check_all_waterbody");
    for (var i = 0; i < waterBodyCheckboxes.length; i++) {
      checkAllButton.innerHTML === "All"
        ? (waterBodyCheckboxes[i].checked = true)
        : (waterBodyCheckboxes[i].checked = false);
    }
    checkAllButton.innerHTML === "All"
      ? (checkAllButton.innerHTML = "None")
      : (checkAllButton.innerHTML = "All");
  }

  return (
    <div>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>

      <button id="test_button" onClick={addTileLayersV2}>Load Tiles</button>
      <button id="remove_tiles_button" onClick={clearAllTiles}>Remove Tiles</button>

      <div id="search_bar_container">
        <div id="search_bar">           
          <input type="text" id="search_input" placeholder="Search Location" spellCheck="false"/>
          <button type="submit" id="search_button" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>

      <ul id="search_results" />

      <div className="data_filters_wrap">
        <div id="source_filters" className="source_filters white-box">
          <h3>Sources</h3>
          <div className="source_checkboxes">
            <input type="checkbox" id="chk_open_wims" className="source_filter" name="chk_open_wims" value="chk_open_wims" defaultChecked />
            <label for="open_wims">Open WIMS</label>
            <input type="checkbox" id="chk_user_testkit_data" className="source_filter" name="chk_user_testkit_data" value="chk_user_testkit_data" defaultChecked />
            <label for="user_testkit_data">User Testkit Data</label>
          </div>
        </div>

        <div id="water_body_filters" className="water_body_filters white-box">
          <h3>Water Body Filter</h3>
          <button type="button" id="check_all_waterbody" onClick={checkAllBodyFilters}>
            All
          </button>
          <div className="water_body_checkboxes">
            <input type="checkbox" id="chk_river" className="body_filter" name="chk_river" value="river" defaultChecked />
            <label for="river">River / Running Surface Water</label>
            <input type="checkbox" id="chk_pond_lake_reservoir_water" className="body_filter" name="chk_pond_lake_reservoir_water" value="chk_pond_lake_reservoir_water" defaultChecked />
            <label for="pond_lake_reservoir_water">Pond / Lake / Reservoir Water</label>
            <input type="checkbox" id="chk_ground_water" className="body_filter" name="chk_ground_water" value="chk_ground_water" defaultChecked />
            <label for="ground_water">Ground Water</label>
            <input type="checkbox" id="chk_sea_water" className="body_filter" name="chk_sea_water" value="chk_sea_water" defaultChecked />
            <label for="sea_water">Sea Water</label>
            <input type="checkbox" id="chk_estuarine_water" className="body_filter" name="chk_estuarine_water" value="chk_estuarine_water" defaultChecked />
            <label for="estuarine_water">Estuarine Water</label>
          </div>
        </div>

        <div id="parameter_filters" className="parameter_filters white-box">
          <h3>Parameter Filter</h3>
          <div className="select_filter">
            <select name="param_filter" id="param_filter" onChange={updateFilterLegend}/>

            <div id="parameter_filter_legend" className="parameter_filter_legend">
              <h4 id="legend_text">Legend</h4>
              <ul id="legend_list" className="legend_list">
                <li className="legend_item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
