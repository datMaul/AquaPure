import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();

  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    phoneNumber: "",
    doB: "",
    password: "",
    addressLine1: "",
    addressLine2: "",
    addressTC: "",
    addressPostcode: ""
  });

  const { firstName, lastName, eMail, phoneNumber, doB, password, addressLine1, addressLine2, addressPostcode, addressTC } = User;

  const onInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/Sign_Up", User);
    navigate("/")
  };


  return (
    <div className='SignUp'>
      <div className='SignUp-Form-Content'>

        <Link to="/accounts/login">
          <button className="backButton" id="backButton"> Back </button>
        </Link>
        <br /> <br />

        <div className='Container-SignUp-Form'>
          <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" id="firstNameInput" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => onInputChange(e)} />
            <input type="text" id="lastNameInput" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => onInputChange(e)} />
            <br /> <br />

            <input type="email" id="emailInput" name="eMail" placeholder="Email" value={eMail} onChange={(e) => onInputChange(e)} />
            <br /> <br />

            <input type="text" id="areaCodeInput" name="areaCode" placeholder="Area Code" />
            <input type="text" id="phoneNumberInput" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => onInputChange(e)} />
            <input type="date" id="dateOfBirthInput" name="doB" placeholder="Date of Birth" value={doB} onChange={(e) => onInputChange(e)} />
            <br /> <br />

            <input type="password" id="passwordInput" name="password" placeholder="Password" value={password} onChange={(e) => onInputChange(e)} />
            <input type="password" id="confirmPasswordInput" name="confirmPassword" placeholder="Confirm Password" />
            <br /> <br />

            <input type="text" id="addressLine1Input" name="addressLine1" placeholder="Address Line 1" value={addressLine1} onChange={(e) => onInputChange(e)} />
            <br /> <br />

            <input type="text" id="addressLine2Input" name="addressLine2" placeholder="Address Line 2" value={addressLine2} onChange={(e) => onInputChange(e)} />
            <br /> <br />

            <input type="text" id="townOrCityInput" name="townOrCity" placeholder="Town / City" />
            <input type="text" id="postcodeInput" name="addressPostcode" placeholder="Postcode" value={addressPostcode} onChange={(e) => onInputChange(e)} />
            <br /> <br />

            <input type="checkbox" id="termsAndConditionsInput" name="termsAndConditions" />
            <label for="termsAndConditions" id="termsAndConditionsLabel"> I agree to all the Terms & Conditions </label>
            <br /> <br />

            <input type="checkbox" id="privacyPolicyInput" name="privacyPolicy" />
            <label for="privacyPolicy" id="privacyPolicyLabel"> I agree to all the Privacy Policy </label>
            <br /> <br />

            <button type="submit" id="submitButton"> Sign Up </button>
          </form>
        </div>
      </div>

      <div className='SignUp-Info'>
        <div className='SignUp-Info-Content'>
          <h1>Sign Up</h1>
          <h2>Welcome to AquaPure</h2>
        </div>
      </div>
    </div>
  );
}