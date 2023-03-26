import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import paramData from "./parameter-data.json";
import { getTileCoords, getAllTileLatPoints } from "./utils.js";
import { getScore, getGradeColour, getOverallScore } from "./scoring.js";
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
    map.current.onClickEvents = [];
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

      // Add circle layer to map
      map.current.addSource("samples_circles", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });
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

      // If there are records, draw the tile and circle layers
      if (map.current.records.length) {
        updateTiles();
        drawCircleLayer(map.current.records);
      }

      // Add tile layer to map
      map.current.addSource("samples_tiles", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });
      map.current.addLayer({
        id: "samples_tiles",
        type: "fill",
        source: "samples_tiles",
        paint: {
          "fill-color": ["get", "fillColour"],
          "fill-opacity": 0.5
        }
      }, "samples_circles");

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
    clearSourceData("samples_circles");
    clearSourceData("samples_tiles");
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
    var selectedParameter = document.getElementById("param_filter").value;

    // If the selected parameter is "Overall Quality", request all parameters
    if (selectedParameter === "Overall Quality") {
      selectedParameter = Object.keys(paramData).join(",").replace("Overall Quality", "");
    };

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
          map.current.getSource("search-results").setData({
            type: "FeatureCollection",
            features: [results.features.find((res) => res["place_name"] === item.innerText)],
          });
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

  // Remove all FeatureCollection data from a given layer source
  function clearSourceData(sourceName) {
    map.current.getSource(sourceName).setData({
      type: "FeatureCollection",
      features: [],
    });
    map.current.popups.forEach(popup => popup.remove()); 
    map.current.onClickEvents.forEach(e => map.current.off("click", sourceName, e));
  }

  // Function to adjust the tile size based on the zoom level
  function updateTiles() {
    clearTimeout(map.current.updateTilesTimeout);
    map.current.updateTilesTimeout = setTimeout(() => {
      const zoom = map.current.getZoom();
      const zoomStage = Math.floor(zoom / 2);

      if (map.current.lastZoomStage !== zoomStage) {
        clearSourceData("samples_tiles");
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

      const sampleId = record.openWIMSRecord?.samplingPoint 
                    ?? record.testkitPurchase?.id 
                    ?? record.mapRecord_ID;

      // Check if a feature with the same coordinates and water body type already exists in the collection
      const existingFeature = circleCollection.features.find((feature) => {
        return (
          feature.properties.sampleId === sampleId
        );
      });

      // If it exists, add the parameter to the existing feature
      if (existingFeature) {
        existingFeature.properties.parameters.push({
          parameterName: record.parameterName,
          parameterValue: record.parameterValue,
          parameterUnit: record.parameterUnit,
          sampleDate: record.recordedDateTime,
        });
        return;
      }

      // If it doesn't exist, create a new feature
      var circleFeature = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [record.longitude, record.latitude],
        },
        properties: {
          sampleId: sampleId,
          sourceType: record.sourceType,
          waterBodyType: record.waterBodyType,
          parameters: [{
            parameterName: record.parameterName,
            parameterValue: record.parameterValue,
            parameterUnit: record.parameterUnit,
            sampleDate: record.recordedDateTime,
          }]
        }
      };

      // Add the feature to the FeatureCollection
      circleCollection.features.push(circleFeature);
    });

    // Add the GeoJSON FeatureCollection to the map
    map.current.getSource("samples_circles").setData(circleCollection);

    // Add a click event to the circles layer
    map.current.on("click", "samples_circles", (e) => {
      map.current.onClickEvents.push(e);
      const coordinates = e.features[0].geometry.coordinates.slice();
      const sampleId = e.features[0].properties.sampleId;
      const sourceType = e.features[0].properties.sourceType;
      const waterBodyType = e.features[0].properties.waterBodyType;
      const parameters = JSON.parse(e.features[0].properties.parameters);

      var parametersString = '';
      var effectsString = '';
      var paramScores = [];

      for (var i = 0; i < parameters.length; i++) {
        var p = parameters[i];

        // Get quality grade based from parameter-data.json and sample value
        // getScore(passed_value, min_range, max_range, ideal_value, sensitivity, function_type="sigmoid_unipolar")
        var qualityGrade = '?';

        const scoringJSON = paramData[p.parameterName]['scoring_function'];
        if (scoringJSON) {
          qualityGrade = getScore(
            p.parameterValue, 
            scoringJSON['min_range'], 
            scoringJSON['max_range'], 
            scoringJSON['ideal_value'], 
            scoringJSON['function_sensitivity'],
            paramData[p.parameterName].scoring_function.shift_x ?? 0, 
            scoringJSON['type']
            );

          paramScores.push(qualityGrade);
          
          // Multiply quality grade by 10 to get a 10-star rating and round to nearest 1 decimal place
          qualityGrade = Math.round(qualityGrade * 10 * 10) / 10;
        }

        const gradeHex = getGradeColour(qualityGrade);

        // Add parameter to parameters string
        parametersString += `<br/>${p.parameterName}: ${p.parameterValue} ${p.parameterUnit} (<p style="color:${gradeHex}; display:inline;">${qualityGrade}☆</p>) ♦️ ${p.sampleDate}`;

        // Get negative effects based on parameter value and quality grade
        const effects = paramData[p.parameterName].effects ?? null;
        
        if (effects) {
          if (qualityGrade < 6) {
            // Low parameter value
            if (p.parameterValue < scoringJSON.ideal_value && effects.low) {
              if (!effectsString.includes(effects.low)) effectsString += `<br/>${effects.low}`;
            }
            // High parameter value
            else if (p.parameterValue > scoringJSON.ideal_value && effects.high) {
              if (!effectsString.includes(effects.high)) effectsString += `<br/>${effects.high}`;
            }
          }
        }
      };

      const overallScore = Math.round(getOverallScore(paramScores) * 10 * 10) / 10;

      // Create a popup
      var popup = new maplibregl.Popup({ offset: 5, maxWidth: "350px" }).setHTML(
        `<b>Sampling Point ID:</b><br/>${sampleId} (${sourceType})<br/><br>` +
        `<b>Water body type:</b><br/>${waterBodyType}<br/><br>` +
        `<b>Location:</b><br/> ${e.features[0].geometry.coordinates.join(', ')}<br/><br>` +
        `<b>Parameter(s):</b>` +
        ((paramScores.length > 1) ? `<br/>Combined Quality Score: <p style="color:${getGradeColour(overallScore)}; display:inline;">${overallScore}☆</p>` : '') +
        parametersString +
        ((effectsString == '') ? '' : `<br/><br><b>Effects:</b>${effectsString}`)
      );

      // Add the popup to the map
      popup.setLngLat(coordinates).addTo(map.current);
      map.current.popups.push(popup);
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

    var latPoints = getAllTileLatPoints(map.current.tileSize);

    var selectedParameter = document.getElementById("param_filter").value;
    //const paramJSON = paramData[selectedParameter]['values'];

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

      const paramJSON = paramData[record.parameterName];

      const paramScore = getScore(record.parameterValue, paramJSON.scoring_function.min_range, paramJSON.scoring_function.max_range, paramJSON.scoring_function.ideal_value, paramJSON.scoring_function.function_sensitivity, paramJSON.scoring_function.shift_x ?? 0, paramJSON.scoring_function.type);

      // Loop through all features in the GeoJSON FeatureCollection
      // and check if the record is within the same tile bounds as another record
      var recordInExistingTile = false;
      for (var i = 0; i < tileCollection.features.length; i++) {
        const feature = tileCollection.features[i];
        const coords = feature.geometry.coordinates[0];

        if ((record.longitude >= coords[0][0] && record.longitude <= coords[3][0]) && (record.latitude >= coords[0][1] && record.latitude <= coords[1][1])) {
          feature.properties.avgParamValue = (feature.properties.avgParamValue + record.parameterValue) / 2;
          feature.properties.sampleIds.push(sampleId);
          feature.properties.parameterScores.push(paramScore);
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
            'parameterScores': [paramScore],
            'parameterName': record.parameterName,
            'avgParamValue': record.parameterValue,
            'parameterUnit': record.parameterUnit,
            'fillColour': '#808080',
          }
        });
      }
    });

    // Add fill-colour to every tile in GeoJSON FeatureCollection
    tileCollection.features.forEach((feature) => {

      const featureProps = feature.properties;
      const paramJSON = selectedParameter === 'Overall Quality'
        ? paramData['Overall Quality']['values']
        : paramData[featureProps.parameterName]['values'];
      const valueToCompare = selectedParameter === 'Overall Quality'
        ? getOverallScore(featureProps.parameterScores) * 10
        : parseFloat(featureProps.avgParamValue);

      const keys = Object.keys(paramJSON);
      let colourToFill = paramJSON[keys[0]];
      for (let i = 0; i < keys.length; i++) {
        const key = parseFloat(keys[i]);
        if (valueToCompare >= key) {
          colourToFill = paramJSON[keys[i]];
        } else {
          break;
        }
      }
      
      featureProps.fillColour = colourToFill;
    });

    // Add tile geoJSON data to the map with retrieved map record data
    map.current.getSource("samples_tiles").setData(tileCollection);
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