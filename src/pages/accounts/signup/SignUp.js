import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    phoneNumber: "",
    doB: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    addressTC: "",
    addressPostcode: "",
  });

  const {
    firstName,
    lastName,
    eMail,
    phoneNumber,
    doB,
    password,
    confirmPassword,
    addressLine1,
    addressLine2,
    addressPostcode,
    addressTC,
  } = User;

  const onInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      await axios.post("http://localhost:8080/Sign_Up", User);
      navigate("/");
    }
  };

  return (
    <div className="SignUp">
      <div className="SignUp-Form-Content">
        <Link to="/accounts/login">
          <button className="backButton" id="backButton">
            {" "}
            Back{" "}
          </button>
        </Link>
        <br /> <br />
        <div className="Container-SignUp-Form">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              id="firstNameInput"
              name="firstName"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              id="lastNameInput"
              name="lastName"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="email"
              id="emailInput"
              name="eMail"
              placeholder="Email"
              required
              value={eMail}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="number"
              id="phoneNumberInput"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="date"
              id="dateOfBirthInput"
              name="doB"
              placeholder="Date of Birth"
              required
              value={doB}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="password"
              id="passwordInput"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="password"
              id="confirmPasswordInput"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="text"
              id="addressLine1Input"
              name="addressLine1"
              placeholder="Address Line 1"
              required
              value={addressLine1}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="text"
              id="addressLine2Input"
              name="addressLine2"
              placeholder="Address Line 2"
              required
              value={addressLine2}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="text"
              id="townOrCityInput"
              name="addressTC"
              placeholder="Town / City"
              required
              value={addressTC}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              id="postcodeInput"
              name="addressPostcode"
              placeholder="Postcode"
              required
              value={addressPostcode}
              onChange={(e) => onInputChange(e)}
            />
            <br /> <br />
            <input
              type="checkbox"
              id="termsAndConditionsInput"
              name="termsAndConditions"
              required
            />
            <label for="termsAndConditions" id="termsAndConditionsLabel">
              {" "}
              I agree to all the{" "}
              <Link to="/accounts/signup/termsandconditions">
                Terms & Conditions
              </Link>
            </label>
            <br /> <br />
            <input
              type="checkbox"
              id="privacyPolicyInput"
              name="privacyPolicy"
              required
            />
            <label for="privacyPolicy" id="privacyPolicyLabel">
              {" "}
              I agree to all the{" "}
              <Link to="/accounts/signup/privacypolicy">Privacy Policy</Link>
            </label>
            <br /> <br />
            <button type="submit" id="submitButton">
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>
      </div>

      <div className="SignUp-Info">
        <div className="SignUp-Info-Content">
          <h1>Welcome to AquaPure Family</h1>
        </div>
      </div>
    </div>
  );
}
