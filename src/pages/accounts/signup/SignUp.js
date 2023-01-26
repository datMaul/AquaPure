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
              className="input-text halfw"
              name="firstName"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              id="lastNameInput"
              className="input-text halfw"
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
              className="input-text fullw"
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
              className="input-text halfw"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="date"
              id="dateOfBirthInput"
              className="input-text halfw"
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
              className="input-text halfw"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="password"
              id="confirmPasswordInput"
              className="input-text halfw"
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
              className="input-text fullw"
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
              className="input-text fullw"
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
              className="input-text halfw"
              name="addressTC"
              placeholder="Town / City"
              required
              value={addressTC}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              id="postcodeInput"
              className="input-text halfw"
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
          <h2>Welcome</h2>
          <h3>To</h3>
          <h1>AquaPure Family</h1>
        </div>
      </div>
    </div>
  );
}
