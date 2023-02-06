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
  

  return (
    <div>

      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>

      <div id="search_bar">
        <input type="text" placeholder="Search Location" />
        <button type="submit"></button>
      </div>

      <div className="data_filters_wrap">

        <div id="water_body_filters" className="water_body_filters white-box">
          <h3>Water Body Filter</h3>
          <button type="button" className="btn btn-primary">All</button>
          <input type="checkbox" id="river" name="river" value="river" />
          <label for="river">River</label>
          <input type="checkbox" id="sea_water" name="sea_water" value="sea_water" />
          <label for="sea_water">Sea Water</label>
          <input type="checkbox" id="ground_water" name="ground_water" value="ground_water" />
          <label for="ground_water">Ground Water</label>
          <input type="checkbox" id="pond_lake_reservoir_water" name="pond_lake_reservoir_water" value="pond_lake_reservoir_water" />
          <label for="pond_lake_reservoir_water">Pond / Lake / Reservoir Water</label>
          <input type="checkbox" id="final_sewage_effluent" name="final_sewage_effluent" value="final_sewage_effluent" />
          <label for="final_sewage_effluent">Final Sewage Effluent</label>
          <input type="checkbox" id="crude_sewage" name="crude_sewage" value="crude_sewage" />
          <label for="crude_sewage">Crude Sewage</label>
          <input type="checkbox" id="estuary_sediment" name="estuary_sediment" value="estuary_sediment" />
          <label for="estuary_sediment">Estuary Sediment</label>
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
