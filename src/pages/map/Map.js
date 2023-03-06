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
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    map.current.addControl(new maplibregl.GeolocateControl(), "bottom-right");
    populateParameterFilters();

    map.current.on("load", function () {
      const searchInput = document.getElementById("search_input");
      const searchResults = document.getElementById("search_results");
      const searchButton = document.getElementById("search_button");

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

  // Populate a list of search results from a search query
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

  function clearAllTiles() {
    // Get the map style
    const style = map.current.getStyle();

    // Loop through the layers and sources and remove the ones that start with 'sample_'
    style.layers.forEach((layer) => {
      const layerId = layer.id;
      if (layerId.startsWith("sample_")) {
        map.current.removeLayer(layerId);
      }
    });
    Object.keys(style.sources).forEach((sourceId) => {
      if (sourceId.startsWith("sample_")) {
        map.current.removeSource(sourceId);
      }
    });
  }

  async function addTileLayers() {
    const records = await fetchMapRecords();
    console.log("records: " + JSON.stringify(records));

    records.forEach((record) => {
      var layerId = null;

      if (record.openWIMSRecord) {
        layerId = record.openWIMSRecord.samplingPointNotation;
      } else if (record.testkitPurchase) {
        layerId = record.testkitPurchase.id;
      }

      if (!layerId) layerId = record.mapRecord_ID;

      // Calculate fill colour based from parameter-data.json and sample value
      var colourToFill = "#808080";
      const paramJSON = paramData[record.parameterName]["values"];
      console.log("paramJSON: " + JSON.stringify(paramJSON));

      for (const key in paramJSON) {
        if (parseFloat(record.parameterValue) >= parseFloat(key)) {
          colourToFill = paramJSON[key];
        }
      }
      console.log("colourToFill: " + colourToFill);

      map.current.addSource("sample_" + layerId, {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              mapTileCoords([record.longitude, record.latitude], 0.25),
            ],
          },
        },
      });
      map.current.addLayer({
        id: "sample_" + layerId,
        type: "fill",
        source: "sample_" + layerId,
        layout: {},
        paint: {
          "fill-color": colourToFill,
          "fill-opacity": 0.5,
        },
      });

      map.current.on("click", "sample_" + layerId, function (e) {
        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            "<b>Sample ID:</b> " +
              record.mapRecord_ID +
              "<br/>" +
              "<b>Source:</b> " +
              record.sourceType +
              "<br/>" +
              "<b>Type:</b> " +
              record.waterBodyType +
              "<br/>" +
              "<b>Sampling Date:</b> " +
              record.recordedDateTime +
              "<br/>" +
              "<b>Parameter</b> " +
              record.parameterName +
              ": " +
              record.parameterValue +
              " " +
              record.parameterUnit +
              "<br/>" +
              "<b>Latitude:</b> " +
              record.latitude +
              "<br/>" +
              "<b>Longitude:</b> " +
              record.longitude +
              "<br/><br/>" +
              "<b>Effects On Health:</b> " +
              "<br/>"
          )
          .addTo(map.current);
      });

      map.current.on("mouseenter", "sample_" + layerId, function () {
        map.current.getCanvas().style.cursor = "pointer";
      });

      map.current.on("mouseleave", "sample_" + layerId, function () {
        map.current.getCanvas().style.cursor = "";
      });
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

      <button id="test_button" onClick={addTileLayers}>
        Load Tiles
      </button>
      <button id="remove_tiles_button" onClick={clearAllTiles}>
        Remove Tiles
      </button>

      <div id="search_bar_container">
        <div id="search_bar">
          <input
            type="text"
            id="search_input"
            placeholder="Search Location"
            spellCheck="false"
          />
          <button type="submit" id="search_button" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
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
            <input
              type="checkbox"
              id="chk_open_wims"
              className="source_filter"
              name="chk_open_wims"
              value="chk_open_wims"
              defaultChecked
            />
            <label for="open_wims">Open WIMS</label>
            <input
              type="checkbox"
              id="chk_user_testkit_data"
              className="source_filter"
              name="chk_user_testkit_data"
              value="chk_user_testkit_data"
              defaultChecked
            />
            <label for="user_testkit_data">User Testkit Data</label>
          </div>
        </div>

        <div id="water_body_filters" className="water_body_filters white-box">
          <h3>Water Body Filter</h3>
          <button
            type="button"
            id="check_all_waterbody"
            onClick={checkAllBodyFilters}
          >
            All
          </button>
          <div className="water_body_checkboxes">
            <input
              type="checkbox"
              id="chk_river"
              className="body_filter"
              name="chk_river"
              value="river"
              defaultChecked
            />
            <label for="river">River / Running Surface Water</label>
            <input
              type="checkbox"
              id="chk_pond_lake_reservoir_water"
              className="body_filter"
              name="chk_pond_lake_reservoir_water"
              value="chk_pond_lake_reservoir_water"
              defaultChecked
            />
            <label for="pond_lake_reservoir_water">
              Pond / Lake / Reservoir Water
            </label>
            <input
              type="checkbox"
              id="chk_ground_water"
              className="body_filter"
              name="chk_ground_water"
              value="chk_ground_water"
              defaultChecked
            />
            <label for="ground_water">Ground Water</label>
            <input
              type="checkbox"
              id="chk_sea_water"
              className="body_filter"
              name="chk_sea_water"
              value="chk_sea_water"
              defaultChecked
            />
            <label for="sea_water">Sea Water</label>
            <input
              type="checkbox"
              id="chk_estuarine_water"
              className="body_filter"
              name="chk_estuarine_water"
              value="chk_estuarine_water"
              defaultChecked
            />
            <label for="estuarine_water">Estuarine Water</label>
          </div>
        </div>

        <div id="parameter_filters" className="parameter_filters white-box">
          <h3>Parameter Filter</h3>
          <div className="select_filter">
            <select
              name="param_filter"
              id="param_filter"
              onChange={updateFilterLegend}
            />
            <div
              id="parameter_filter_legend"
              className="parameter_filter_legend"
            >
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
