import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
//import { Link } from "react-router-dom";

export default function DonationForm() {
  const [DonationData, setDonationData] = useState({
    fullName: "",
    email: "",
    charity: "",
    amount: "",
    cardName: "",
    creditCardNumber: "",
    expDate: ""
  });

  const {
    fullName,
    email,
    charity,
    amount,
    cardName,
    creditCardNumber,
    expDate
  } = DonationData;
  
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setDonationData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/donation/DonationForm', DonationData).then(response => console.log(response)).catch(error => console.error(error));
    // Send DonationData to your database here
    console.log(DonationData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input type="text" placeholder="Full name" required onChange={(event) => setDonationData({ ...DonationData, fullName: event.target.value })} value={fullName} />
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@example.com" required onChange={(event) => setDonationData({ ...DonationData, email: event.target.value })} value={email}/>
            </div>
            <div className="inputBox">
              <label>Charity:</label>
              <select id="charity" name="charity" value={charity} onChange={(event) => setDonationData({...DonationData, charity: event.target.value})}>
                <option value="WaterAid">WaterAid</option>
                <option value="Soil Assosiation">Soil Assosiation</option>
                <option value="RSPB">RSPB</option>
                <option value="WWF">WWF</option>
              </select>
            </div>
            <div className="inputBox">
              <span>Amount to donate:</span>
              <input type="text" placeholder="£0.00" className='price' required onChange={(event) => setDonationData({ ...DonationData, amount: event.target.value })} value={amount}/>
            </div>
          </div>
          <div className="col">
            <h3 className="title">payment</h3>
            <div className="inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="mr. full name" required onChange={(event) => setDonationData({ ...DonationData, cardName: event.target.value })} value={cardName}/>
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" required onChange={(event) => setDonationData({ ...DonationData, creditCardNumber: event.target.value })} value={creditCardNumber}/>
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>Exp date :</span>
                <input type="date" placeholder="2022" required onChange={(event) => setDonationData({ ...DonationData, expDate: event.target.value })} value={expDate}/>
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



