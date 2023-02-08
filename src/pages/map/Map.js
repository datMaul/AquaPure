import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import paramData from './parameter-data.json';
import sample from './sample.json';
import { toInteger } from 'lodash';
import { OSGB36toWGS84, OSGB36toMapSquare } from './utils';
//const { OSGB36toMapSquare } = require('./util');

//var nullIsland = new maplibregl.MercatorCoordinate(0.5, 0.5, 0);


export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4);
  const [lat] = useState(54);
  const [zoom] = useState(5);
  const [API_KEY] = useState('OXjioEfDUH0gP7RYRS4S'); 

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.addControl(new maplibregl.GeolocateControl(), 'bottom-right');
    populateParameterFilters();

    var sampleData = sample['http://environment.data.gov.uk/water-quality/data/measurement/AN-1986280-3169'];

    map.current.on('load', function () {
      const sampleOSGB36 = [sample['http://environment.data.gov.uk/water-quality/data/measurement/AN-1986280-3169'].easting, sample['http://environment.data.gov.uk/water-quality/data/measurement/AN-1986280-3169'].northing]
      const sqr = OSGB36toMapSquare(toInteger(sampleOSGB36[0]), toInteger(sampleOSGB36[1]))
      console.log(sampleOSGB36[0], sampleOSGB36[1])
      console.log(sqr)
  
      map.current.addSource('maine', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [sqr]
          }
        }
      });
  
      map.current.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine',
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });

      map.current.on('click', 'maine', function (e) {
        new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(sampleData.parameter +": "+ sampleData.value +" "+ sampleData.unit)
        .addTo(map.current);
      });

      map.current.on('mouseenter', 'maine', function () {
        map.current.getCanvas().style.cursor = 'pointer';
      });
        
      // Change it back to a pointer when it leaves.
      map.current.on('mouseleave', 'maine', function () {
        map.current.getCanvas().style.cursor = '';
      });
  
    });
  });

  function populateParameterFilters() {
    const selectFilter = document.getElementById('filter');
    for (var param in paramData) {
      const option = document.createElement('option');
      option.value = param;
      option.text = param;
      selectFilter.appendChild(option);
    }
    updateFilterLegend();
  };
  
  function updateFilterLegend() {
    const selectFilter = document.getElementById('filter');
    const selectedFilter = selectFilter.value;

    const legendText = document.getElementById('legend_text');
    const legendList = document.getElementById('legend_list');
    legendList.innerHTML = '';

    var values = paramData[selectedFilter]["values"];
    var unit = paramData[selectedFilter]["unit"];
    for (var value in values) {
      const legendItem = document.createElement('li');
      legendItem.innerHTML = `<div style="background-color: ${values[value]}"></div>${value}`;
      legendItem.className = "legend_item";
      legendList.appendChild(legendItem);
      legendText.innerHTML = `Legend (${unit})`;
    }
  };
  
  function checkAllBodyFilters() {
    const waterBodyCheckboxes = document.getElementsByClassName('body_filter');
    const checkAllButton = document.getElementById('check_all_waterbody');
    for (var i = 0; i < waterBodyCheckboxes.length; i++) {
      (checkAllButton.innerHTML == "All") ? waterBodyCheckboxes[i].checked = true : waterBodyCheckboxes[i].checked = false;
    }
    (checkAllButton.innerHTML == "All") ? checkAllButton.innerHTML = "None" : checkAllButton.innerHTML = "All";
  };

  return (
    <div>

      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>

      <div id="search_bar">
        <input type="text" placeholder="Search Location" />
        <button type="submit" id="search_button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>

      <div className="data_filters_wrap">

        <div id="water_body_filters" className="water_body_filters white-box">
          <h3>Water Body Filter</h3>
          <button type="button" id="check_all_waterbody" onClick={checkAllBodyFilters}>All</button>
          <div className="water_body_checkboxes">
            <input type="checkbox" id="river" className="body_filter" name="river" value="river" />
            <label for="river">River / Running Surface Water</label>
            <input type="checkbox" id="pond_lake_reservoir_water" className="body_filter" name="pond_lake_reservoir_water" value="pond_lake_reservoir_water" />
            <label for="pond_lake_reservoir_water">Pond / Lake / Reservoir Water</label>
            <input type="checkbox" id="ground_water" className="body_filter" name="ground_water" value="ground_water" />
            <label for="ground_water">Ground Water</label>
            <input type="checkbox" id="sea_water" className="body_filter" name="sea_water" value="sea_water" />
            <label for="sea_water">Sea Water</label>
            <input type="checkbox" id="estuarine_water" className="body_filter" name="estuarine_water" value="estuarine_water" />
            <label for="estuarine_water">Estuarine Water</label>
          </div>
        </div>

        <div id="parameter_filters" className="parameter_filters white-box">
          <h3>Parameter Filter</h3>
          <div className="select_filter">
            <select name="filter" id="filter" onChange={updateFilterLegend}>
            </select>
            <div id="parameter_filter_legend" className="parameter_filter_legend">
              <h4 id="legend_text">Legend</h4>
              <ul id="legend_list" className="legend_list">
                <li className="legend_item">
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
