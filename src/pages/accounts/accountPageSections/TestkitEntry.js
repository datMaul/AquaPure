import axios from "axios";
import "./AccountPageSections.css";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";





export default function TestkitEntry() {

  const navigate = useNavigate();
  
  const [User, setUser] = useState({
    uniqueID: "",
    pH: "",
    // longitude: "",
    // latitude: "",
    totalAlkalinity: "",
    totalHardness: "",
    nitrite: "",
    lead: "",
    manganese: "",
    coliformBacteria: "",
    
  });

  const {
    uniqueID,
    pH,
    // longitude,
    // latitude,
    totalAlkalinity,
    totalHardness,
    nitrite,
    lead,
    manganese,
    coliformBacteria,
    
  } = User;

  const onInputChange = (b) => {
    setUser({ ...User, [b.target.name]: b.target.value });
  };
  
  
  
  
  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  async function handleSubmit(b) {
  

    
    b.preventDefault();

    const form = new FormData(b.target);

    const data = Object.fromEntries(form.entries());

    // console.log(data);
    console.log(b);



    
    const response = await fetch(`http://localhost:8080/testkit/activate/${data.uniqueID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pH: data.pH,
        longitude: data.longitude,
        latitude: data.latitude,
        totalAlkalinity: data.totalAlkalinity,
        totalHardness: data.totalHardness,
        nitrite: data.nitrite,
        lead: data.lead,
        manganese: data.manganese,
        coliformBacteria: data.coliformBacteria,
      }),
    });
    
    const x = await response.json();

    if (x.error != null) {
      window.alert("You cannot activate this test kit because it's already activated.")
    } else {
      window.alert("Successfully activated the test kit.")
      
      
      
      
    }
    console.log(x);
    
  } const onSubmit = async (b) => {
     console.log(b)
     b.preventDefault();
     User.accountType = "User";
     await axios.post("http://localhost:8080/accounts", User);
    navigate("/");
    
   };

  return (
    <div className="Accounts-Content">
      <div className="AccountPageSection-Content">
        <div className="Row-1-Content">
          <h2>Testkit Entry</h2>
        </div>
        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label htmlFor="uniqueID">Unique ID:</label>
            <br />
            <label htmlFor="pH">pH:</label>
            <br />
            <label hitmlFor="longitude">Longitude:</label>
            <br />
            <label hitmlFor="latitude">Latitude:</label>
            <br />
            <label htmlFor="totalAlkalinity">Total Alkalinity:</label>
            <br />
            <label htmlFor="totalHardness">Total Hardness:</label>
            <br />
            <label htmlFor="nitrite">Nitrite:</label>
            <br />
            <label htmlFor="lead">Lead:</label>
            <br />
            <label htmlFor="manganese">Manganese:</label>
            <br />
            <label htmlFor="coliformBacteria">Coliform Bacteria:</label>
          </div>
          <div className="Inputs-Content">
            <form onSubmit={(b) => handleSubmit(b)}>
              <input
                type="text"
                id="uniqueID"
                name="uniqueID"
                placeholder="Enter Unique ID"
                minLength={1}
                value={uniqueID}
                onChange={(b) => onInputChange(b)}
                
              />
              <br />
              <input
                type="number"
                id="pH"
                name="pH"
                placeholder="Enter pH"
                min="0"
                max="14"
                value={pH}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <input
                type="number"
                id="longitude"
                name="Longitude"
                placeholder="Enter Logitude"
                min="-180"
                max="180"
                // value={longitude}
                onChange={(b) => onInputChange(b)}
                
              />
              <br />
              <input
                type="number"
                id="latitude"
                name="Latitude"
                placeholder="Enter Latitude"
                min="-90"
                max="90"
                // value={latitude}
                onChange={(b) => onInputChange(b)}

              />
              <br />
              <input
                type="number"
                id="totalAlkalinity"
                name="totalAlkalinity"
                placeholder="Enter Total Alkalinity mg/l"
                min="0"
                value={totalAlkalinity}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <input
                type="number"
                id="totalHardness"
                name="totalHardness"
                placeholder="Enter Total Hardness mg/l"
                min="0"
                value={totalHardness}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <input
                type="number"
                id="nitrite"
                name="nitrite"
                placeholder="Enter Nitrite mg/l"
                min="0"
                value={nitrite}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <input
                type="number"
                id="lead"
                name="lead"
                placeholder="Enter Lead ug/l"
                min="0"
                value={lead}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <input
                type="number"
                id="manganese"
                name="manganese"
                placeholder="Enter Manganese ug/l"
                min="0"
                value={manganese}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <input
                type="number"
                id="coliformBacteria"
                name="coliformBacteria"
                placeholder="Enter Coliform Bacteria "
                min="0"
                value={coliformBacteria}
                onChange={(b) => onInputChange(b)}
              />
              <br />
              <button id="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
}
