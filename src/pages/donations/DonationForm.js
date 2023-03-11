import React, { useState } from 'react';
import './form.css';
import './donationFormLink.js';
import { Link } from "react-router-dom";

export default function DonationForm() {
  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input type="text" placeholder="Full name" />
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div className="inputBox">
              <label>Charty:</label>
                <select id="cars" name="cars">
                  <option value="WaterAid">WaterAid</option>
                  <option value="Soil Assosiation">Soil Assosiation</option>
                  <option value="RSPB">RSPB</option>
                  <option value="WWF">WWF</option>
                </select>
            </div>
          </div>
          <div className="col">
            <h3 className="title">payment</h3>
            <div className="inputBox">
              <span>cards accepted :</span>
              <img src="images/card_img.png" alt="" />
            </div>
            <div className="inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="mr. full name" />
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="inputBox">
              <span>exp month :</span>
              <input type="text" placeholder="january" />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>exp year :</span>
                <input type="number" placeholder="2022" />
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="1234" />
              </div>
            </div>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              I agree with the terms and conditions
            </label>
          </div>
        </div>
        <input type="submit" value="proceed to checkout" className="submit-btn" />
      </form>
    </div>
  );
}



