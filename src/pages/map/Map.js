import React from 'react'
import maplibregl from 'maplibre-gl'

export default function Map() {
  return (
    <div>
      <h1>Map</h1>
      <h2>hello</h2>

      {/*
      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14
        }}
        style={{width: "100%", height: "100vh"}}
        mapStyle="https://api.maptiler.com/maps/basic-v2/?key=OXjioEfDUH0gP7RYRS4S#1.0"
      ></Map>
      */}

      <div id="search_bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>

      <div id="water_body_filters">
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

      <div id="parameter_filters">
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
        </div>

        <div id="parameter_filter_legend">
          <h4>Legend</h4>
          <ul className="legend_list">
            <li className="legend_item">
              <div className="legend_text">7</div>
            </li>
          </ul>

        </div>

        <button type="locate_gps">GPS</button>

      </div>
    </div>
  )
}
