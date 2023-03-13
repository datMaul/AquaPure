import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import paramData from "./parameter-data.json";
import { getTileCoords, getAllTileLatPoints } from "./utils.js";
import { getScore, getGradeColour } from "./scoring.js";
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
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.addControl(new maplibregl.GeolocateControl(), 'top-right');
    populateParameterFilters();

    map.current.popups = [];
    // map.current.selectedSources = [];
    // map.current.selectedWaterBodies = [];
    // map.current.selectedParameters = [];
    map.current.records = [];
    map.current.lastZoomStage = -1;
    map.current.tileSize = 0.64;

    // On zoom change, update the tile size and redraw the tiles
    map.current.on("zoom", () => {
      if (map.current.records.length) updateTiles();
    });

    map.current.on('load', async function () {

      await fetchMapRecords();
      if (map.current.records.length) updateTiles();

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

      // Add event listener to checkboxes and parameter dropdown to update the map tiles
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"].body_filter, input[type="checkbox"].source_filter, select#param_filter'
      );
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          filterEvent()
        });
      });
      
    });
  });

  async function filterEvent() {
    const start = performance.now();
    await fetchMapRecords();
    const end = performance.now();
    console.log("Time taken to fetch map records: " + (end - start) + "ms");
    clearAllCircles();
    clearAllTiles();
    await drawCircleLayer(map.current.records);
    await drawTileLayer(map.current.records);
  }

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

    // If no water body types or source types are selected, return
    if (!waterBodyTypes && !sourceTypes) return;

    // Get parameter name
    const selectedParameter = document.getElementById("param_filter").value;

    // If there are any sub parameters for the selected parameter, add them to the parameter names array
    // const parameterNamesArray = [selectedParameter];
    // paramData[selectedParameter].names?.forEach((name) => {
    //   parameterNamesArray.push(name);
    // });
    // const parameterNames = parameterNamesArray.join(",");

    const params = {
      sourceTypes: sourceTypes,
      waterBodyTypes: waterBodyTypes,
      parameterNames: selectedParameter,
    };
    
    // Send a GET request to the server to fetch map records by parameters
    const response = await axios.get(
      "http://localhost:8080/maprecordsbyparams",
      { params }
    );

    map.current.records = response.data;

    console.log(response.data);
    return response.data;
  }

  // Search for a place
  function handleSearch() {
    const searchInput = document.getElementById("search_input").value;
    searchPlace(searchInput).then((results) => {
      //console.log(results);
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
      //console.log(results);
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
          //console.log(searchResultItems);
          //console.log(item.dataset.bbox);
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
    if (map.current.getLayer("samples_tiles")) map.current.removeLayer("samples_tiles");

    // Remove the samples_tiles source
    if (map.current.getSource("samples_tiles")) map.current.removeSource("samples_tiles");
  }

  // Remove all circle layers from the map
  function clearAllCircles() {
    if (map.current.getLayer("samples_circles")) map.current.removeLayer("samples_circles");
    if (map.current.getSource("samples_circles")) map.current.removeSource("samples_circles");
  }

  // Function to adjust the tile size based on the zoom level
  function updateTiles() {
    clearTimeout(map.current.updateTilesTimeout);
    map.current.updateTilesTimeout = setTimeout(() => {
      const zoom = map.current.getZoom();
      const zoomStage = Math.floor(zoom / 2);

      if (map.current.lastZoomStage !== zoomStage) {
        clearAllTiles();
        map.current.tileSize = 4 / Math.pow(2.5, zoomStage);
        drawTileLayer(map.current.records);
      }

      map.current.lastZoomStage = zoomStage;
    }, 100);
  }

  function drawCircleLayer(records) {
    // Create a GeoJSON FeatureCollection for circles
    var circleCollection = {
      type: "FeatureCollection",
      features: [],
    };

    records.forEach((record) => {

      //console.log(`record: ${JSON.stringify(record)}`)

      const sampleId = record.openWIMSRecord?.samplingPoint 
                    ?? record.testkitPurchase?.id 
                    ?? record.mapRecord_ID;

      // Create a GeoJSON Feature for each record 
      var circleFeature = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [record.longitude, record.latitude],
        },
        properties: {
          sampleId: sampleId,
          sampleDate: record.recordedDateTime,
          sourceType: record.sourceType,
          waterBodyType: record.waterBodyType,
          parameterName: record.parameterName,
          parameterValue: record.parameterValue,
          parameterUnit: record.parameterUnit
        }
      };

      // Add the feature to the FeatureCollection
      circleCollection.features.push(circleFeature);
    });

    // Add the GeoJSON FeatureCollection to the map
    map.current.addSource("samples_circles", {
      type: "geojson",
      data: circleCollection,
    });

    // Add a circle layer to the map
    map.current.addLayer({
      id: "samples_circles",
      type: "circle",
      source: "samples_circles",
      paint: {
        'circle-color': '#11b4da',
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff'
      }
    });

    // Add a click event to the circles layer
    map.current.on("click", "samples_circles", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const sampleId = e.features[0].properties.sampleId;
      const sourceType = e.features[0].properties.sourceType;
      const sampleDate = e.features[0].properties.sampleDate;
      const waterBodyType = e.features[0].properties.waterBodyType;
      const parameterName = e.features[0].properties.parameterName;
      const parameterValue = e.features[0].properties.parameterValue;
      const parameterUnit = e.features[0].properties.parameterUnit;

      // Get quality grade based from parameter-data.json and sample value
      // getScore(passed_value, min_range, max_range, ideal_value, sensitivity, function_type="sigmoid_unipolar")
      var qualityGrade = '?';

      const scoringJSON = paramData[parameterName]['scoring_function'];
      console.log(scoringJSON)
      if (scoringJSON) {
        qualityGrade = getScore(
          parameterValue, 
          scoringJSON['min_range'], 
          scoringJSON['max_range'], 
          scoringJSON['ideal_value'], 
          scoringJSON['function_sensitivity'],
          paramData[parameterName].scoring_function.shift_x ?? 0, 
          scoringJSON['type']
          );
        console.log(qualityGrade)
        
        // Multiply quality grade by 10 to get a 10-star rating and round to nearest 1 decimal place
        qualityGrade = Math.round(qualityGrade * 10 * 10) / 10;
      }

      const gradeHex = getGradeColour(qualityGrade);

      // Get negative effects based on parameter value and quality grade
      const effects = paramData[parameterName].effects ?? null;
      var effectsString = '';
      console.log(effects)
      if (effects) {
        console.log(`effects found for ${parameterName}`)
        if (qualityGrade < 6) {
          console.log(`low quality grade for ${parameterName}`)
          // Low parameter value
          if (parameterValue < scoringJSON.ideal_value && effects.low) {
            console.log(`low effects found for ${parameterName}`)
            effectsString = `<br/><br><b>Effects:</b><br/>${effects.low}`;
          }
          // High parameter value
          else if (parameterValue > scoringJSON.ideal_value && effects.high) {
            console.log(`high effects found for ${parameterName}`)
            effectsString = `<br/><br><b>Effects:</b><br/>${effects.high}`;
          }
        }
      }

      // Create a popup
      var popup = new maplibregl.Popup({ offset: 5, maxWidth: "320px" }).setHTML(
        `<b>Sample ID:</b><br/>${sampleId} (${sourceType})<br/><br>` +
        // `<b>Source type:</b><br/>${sourceType}<br/><br>` +
        `<b>Sample date:</b><br/>${sampleDate}<br/><br>` +
        `<b>Water body type:</b><br/>${waterBodyType}<br/><br>` +
        `<b>Location:</b><br/> ${e.features[0].geometry.coordinates.join(', ')}<br/><br>` +
        `<b>Parameter(s):</b><br/>` +
        `${parameterName}: ${parameterValue} ${parameterUnit} (<p style="color:${gradeHex}; display:inline;">${qualityGrade}☆</p>)` +
        `${effectsString}`
      );

      // Add the popup to the map
      popup.setLngLat(coordinates).addTo(map.current);
    });

    // Change the cursor to a pointer when the mouse is over the circles layer
    map.current.on("mouseenter", "samples_circles", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves
    map.current.on("mouseleave", "samples_circles", () => {
      map.current.getCanvas().style.cursor = "";
    });
  }

  // Add tile layers to the map with retrieved map record data
  async function drawTileLayer(records) {
    // Fetch map records from the backend
    //const records = map.current.records;

    var latPoints = getAllTileLatPoints(map.current.tileSize);

    // Create a GeoJSON FeatureCollection
    var tileCollection = {
      type: "FeatureCollection",
      features: [],
    };

    records.forEach((record) => {

      // Get the sample ID
      const sampleId = record.openWIMSRecord?.samplingPoint 
                   ?? record.testkitPurchase?.id 
                   ?? record.mapRecord_ID;

      // Loop through all features in the GeoJSON FeatureCollection
      // and check if the record is within the same tile bounds as another record
      var recordInExistingTile = false;
      for (var i = 0; i < tileCollection.features.length; i++) {
        const feature = tileCollection.features[i];
        const coords = feature.geometry.coordinates[0];

        if ((record.longitude >= coords[0][0] && record.longitude <= coords[3][0]) && (record.latitude >= coords[0][1] && record.latitude <= coords[1][1])) {
          feature.properties.avgParamValue = (feature.properties.avgParamValue + record.parameterValue) / 2;
          feature.properties.sampleIds.push(sampleId);
          if (!feature.properties.waterBodyTypes.includes(record.waterBodyType)) {
            feature.properties.waterBodyTypes.push(record.waterBodyType);
          }
          recordInExistingTile = true;
          break;
        }
      }

      // If the record is not within the same tile bounds of another record, create a new tile
      if (!recordInExistingTile) {
        tileCollection.features.push({
          'type': "Feature",
          'geometry': {
            'type': "Polygon",
            'coordinates': [getTileCoords([record.longitude, record.latitude], map.current.tileSize, latPoints)]
          },
          'properties': {
            'sampleIds': [sampleId],
            'waterBodyTypes': [record.waterBodyType],
            'parameterName': record.parameterName,
            'avgParamValue': record.parameterValue,
            'parameterUnit': record.parameterUnit,
            'fillColour': '#808080',
            'popupHTML': 'There is no data to be displayed for this tile.'
          }
        });
      }
    });

    // Add fill-colour and popupHTML to every tile in GeoJSON FeatureCollection
    // Add popupHTML to every tile in GeoJSON FeatureCollection
    tileCollection.features.forEach((feature) => {
      // Calculate fill colour based from parameter-data.json and sample value
      var colourToFill = '#808080';
      const paramJSON = paramData[feature.properties.parameterName]['values'];
      for (const key in paramJSON) {
        if (parseFloat(feature.properties.avgParamValue) >= parseFloat(key)) {
          colourToFill = paramJSON[key];
        }
      }
      feature.properties.fillColour = colourToFill;

      // Create popup HTML
      // var popupHTML = `<div class="map_popup"><p>${feature.properties.parameterName}</p>` +
      //   `<p>Average Value: ${feature.properties.avgParamValue}</p>` +
      //   `<p>Sample Count: ${feature.properties.sampleIds.length}</p>` +
      //   `<p>Water Body Types: ${feature.properties.waterBodyTypes.join(', ')}</p>`;
      //   //`<p>Sample IDs: ${feature.properties.sampleIds.join(', ')}</p></div>`;
      // feature.properties.popupHTML = popupHTML;
    });

    //console.log(tileCollection);

    // Add tile layers to the map with retrieved map record data
    map.current.addSource("samples_tiles", {
      'type': "geojson",
      'data': tileCollection
    });
    map.current.addLayer({
      'id': "samples_tiles",
      'type': "fill",
      'source': "samples_tiles",
      'layout': {},
      'paint': {
        "fill-color": ["get", "fillColour"],
        "fill-opacity": 0.5
      }
    }, 'samples_circles');
      

    // Add popup to the map
    // map.current.on('click', 'samples_tiles', function (e) {
    //   new maplibregl.Popup()
    //     .setLngLat(e.lngLat)
    //     .setHTML(e.features[0].properties.popupHTML)
    //     .addTo(map.current);
    // });

    // // Change the cursor to a pointer when the mouse is over the samples_tiles layer
    // map.current.on('mouseenter', 'samples_tiles', function () {
    //   map.current.getCanvas().style.cursor = 'pointer';
    // });
    // // Change it back to a cursor when it leaves
    // map.current.on('mouseleave', 'samples_tiles', function () {
    //   map.current.getCanvas().style.cursor = '';
    // });

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
    const selectAllCheckbox = document.getElementById("chk_check_all_waterbody");

    if (selectAllCheckbox.checked) {
      for (var i = 0; i < waterBodyCheckboxes.length; i++) {
        waterBodyCheckboxes[i].checked = true;
      }
    } else {
      for (var i = 0; i < waterBodyCheckboxes.length; i++) {
        waterBodyCheckboxes[i].checked = false;
      }
    }

    filterEvent();
  }

  return (
    <div>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>

      {/* <button id="test_button" onClick={async () => drawClustersLayer(map.current.records)}>Load Tiles</button>
      <button id="remove_tiles_button" onClick={clearAllTiles}>Remove Tiles</button> */}

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

      <div className="data_filters_wrap" id="data_filters_wrap">
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
          {/* <button type="button" id="check_all_waterbody" onClick={checkAllBodyFilters}>All</button> */}
          <div id = "check_all_waterbody_container">
              <input type="checkbox" id="chk_check_all_waterbody" defaultChecked onClick={checkAllBodyFilters} />
              <label for="selectAllBodyFilters" id="check_all_waterbody">Select All</label>
            </div>
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
