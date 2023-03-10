import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import paramData from "./parameter-data.json";
import { getTileCoords, getAllTileLatPoints } from "./utils.js";
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

            <div>
                <div className="map-wrap">
                    <div ref={mapContainer} className="map" />
                </div>

                {/* <button id="test_button" onClick={async () => drawClustersLayer(map.current.records)}>Load Tiles</button>
      <button id="remove_tiles_button" onClick={clearAllTiles}>Remove Tiles</button> */}

                <div id="search_bar_container">
                    <div id="search_bar">
                        <input type="text" id="search_input" placeholder="Search Location" spellCheck="false" />
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
                        <div id="check_all_waterbody_container">
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
                            <select name="param_filter" id="param_filter" onChange={updateFilterLegend} />

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