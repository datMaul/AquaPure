import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

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

  });

  return (
    <div>

      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>

      <div id="search_bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>

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
          <select name="filter" id="filter">
            <option value="pH">pH</option>
            <option value="Total Alkalinity">Total Alkalinity</option>
            <option value="Total Hardness">Total Hardness</option>
            <option value="Free Chlorine">Free Chlorine</option>
            <option value="Total Chlorine">Total Chlorine</option>
            <option value="Iron">Iron</option>
            <option value="Copper">Copper</option>
            <option value="Lead">Lead</option>
            <option value="Nitrate">Nitrate</option>
            <option value="Nitrite">Nitrite</option>
            <option value="MPS">MPS</option>
            <option value="Fluoride">Fluoride</option>
            <option value="Cyanuric Acid">Cyanuric Acid</option>
            <option value="Ammonia Chloride">Ammonia Chloride</option>
            <option value="Bromine">Bromine</option>
            <option value="Carbonate">Carbonate</option>
          </select>
          <div id="parameter_filter_legend" className="parameter_filter_legend">
            <h4>Legend</h4>
            <ul className="legend_list">
              <li className="legend_item">
                <div className="legend_text">7</div>
              </li>
            </ul>
          </div>
        </div>

        

      </div>

    </div>
  )
}
