import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

export default function DonationForm() {
  const navigate = useNavigate();
  const [DonationData, setDonationData] = useState({
    fullName: "",
    email: "",
    amount: "",
    cardName: "",
    creditCardNumber: "",
    expDate: ""
  });

  const {
    fullName,
    email,
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
    console.log("Submitting form...");
    
    axios.post('http://localhost:8080/donations/DonationForm', DonationData)
      .then(response => {
        console.log(response);
        navigate("/donations/Invoice");
      })
      .catch(error => console.error(error));
  
    console.log(DonationData);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>Full Name :</span>
              <input type="text" placeholder="Full name" required onChange={(event) => setDonationData({ ...DonationData, fullName: event.target.value })} value={fullName} />
            </div>
            <div className="inputBox">
              <span>Email :</span>
              <input type="email" placeholder="example@example.com" pattern="[^@]+@[^@]+.+" required onChange={(event) => setDonationData({ ...DonationData, email: event.target.value })} value={email}/>
            </div>
            {/* <div className="inputBox">
              <span>Charity:</span>
              <select id="charity" name="charity" value={charity} onChange={(event) => setDonationData({ ...DonationData, charity: event.target.value })}>
                <option value="WaterAid">WaterAid</option>
                <option value="drop_in_the_bucket">Drop in the bucket</option>
                <option value="bloodWater">Blood: Water</option>
                <option value="waterOrg">Water.org</option>
              </select>
            </div> */}
            <div className="inputBox">
              <span>Amount to Donate:</span>
              <input type="text" placeholder="£0.00" className='price' required onChange={(event) => setDonationData({ ...DonationData, amount: event.target.value })} value={amount}/>
            </div>
          </div>
          <div className="col">
            <h3 className="title">payment</h3>
            <div className="inputBox">
              <span>Name on Card :</span>
              <input type="text" placeholder="mr. full name" required onChange={(event) => setDonationData({ ...DonationData, cardName: event.target.value })} value={cardName}/>
            </div>
            <div className="inputBox">
              <span>Credit Card Number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" maxLength={16} required onChange={(event) => setDonationData({ ...DonationData, creditCardNumber: event.target.value })} value={creditCardNumber}/>
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>Exp Date :</span>
                <input type="date" placeholder="2022" required onChange={(event) => setDonationData({ ...DonationData, expDate: event.target.value })} value={expDate}/>
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="1234" maxLength={3} required/>
              </div>
            </div>
          </div>
          <div class="remember-forgot">
            <label>
              <input required type="checkbox"/>
              I agree to the terms and conditions.
              </label>
              <p>By making this donation, you agree to AquaPure's terms and conditions. All donations are final and non-refundable. We reserve the right to decline or refund any donation at our discretion. We also reserve the right to modify these terms and conditions at any time without prior notice. We take no responsibility for any unauthorized use of your payment method while making a donation.</p>
            </div>
        </div>
        <input type="submit" value="Proceed to Checkout" className="submit-btn" />
      </form>
    </div>
  );
}