import React, { useState } from 'react';
import './form.css';
import './donationFormLink.js';
import { Link } from "react-router-dom";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    charity: "",
    amount: "",
    cardName: "",
    creditCardNumber: "",
    expMonth: "",
    expYear: "",
    agreeToTerms: false
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send formData to your database here
    console.log(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input type="text" placeholder="Full name" required onChange={(event) => setFormData({ ...formData, amount: event.target.value })} />
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@example.com" required onChange={(event) => setFormData({ ...formData, amount: event.target.value })} />
            </div>
            <div className="inputBox">
              <label>Charity:</label>
              <select id="cars" name="cars">
                <option value="WaterAid">WaterAid</option>
                <option value="Soil Assosiation">Soil Assosiation</option>
                <option value="RSPB">RSPB</option>
                <option value="WWF">WWF</option>
              </select>
            </div>
            <div className="inputBox">
              <span>Amount to donate:</span>
              <input type="text" placeholder="£0.00" className='price' required onChange={(event) => setFormData({ ...formData, amount: event.target.value })} />
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
              <input type="text" placeholder="mr. full name" required onChange={(event) => setFormData({ ...formData, amount: event.target.value })} />
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" required onChange={(event) => setFormData({ ...formData, amount: event.target.value })} />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>Exp date :</span>
                <input type="date" placeholder="2022" required/>
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="1234" required/>
              </div>
            </div>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" required/>
              I agree with the terms and conditions
            </label>
          </div>
        </div>
        <input type="submit" value="proceed to checkout" className="submit-btn" />
      </form>
    </div>
  );
}



