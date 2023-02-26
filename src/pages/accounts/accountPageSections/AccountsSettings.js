import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AccountsSettings.css";

export default function AccountsSettings() {
  let navigating = useNavigate();

  console.log("User ID.1: " + localStorage.getItem("user_ID"));

  const [user, setUser] = useState({
    eMail: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    addressLine2: "",
    addressLine1: "",
    addressTC: "",
    addressPostcode: "",
    doB: "",
  });

  const {
    eMail,
    firstName,
    lastName,
    phoneNumber,
    addressLine2,
    addressLine1,
    addressTC,
    addressPostcode,
    doB,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:8080/User/${localStorage.getItem("user_ID")}`,
        user
      );
      console.log(res.data);
      alert("Your Changes Have Been Saved!");
      navigating("/accounts");
    } catch (err) {
      console.log(err);
      alert("Your Changes Have Not Been Saved!");
      navigating("/accounts");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/User/${localStorage.getItem("user_ID")}`
    );
    setUser(result.data);
  };

  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className="Accounts-Content">
      <div className="AccountsSettings-Content">
        <div className="Row-1-Content">
          <h2> Accounts Settings </h2>
        </div>

        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label htmlFor="Name">First Name:</label>
            <br /> <br />
            <label htmlFor="Name">Last Name:</label>
            <br /> <br />
            <label>Date of Birth:</label>
            <br /> <br />
            <label>Phone Number:</label>
            <br /> <br />
            <label>Email Address:</label>
            <br /> <br />
            <label>Address Line 1:</label>
            <br /> <br />
            <label>Address Line 2:</label>
            <br /> <br />
            <label>Town/City:</label>
            <br /> <br />
            <label>Postcode:</label>
          </div>

          <div className="Input-Content">
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type={"text"}
                placeholder="First Name of The User"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"text"}
                placeholder="Last Name of The User"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"date"}
                placeholder="Enter Date of Birth"
                name="doB"
                value={doB}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"text"}
                placeholder="Enter EMail"
                name="eMail"
                value={eMail}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"text"}
                placeholder="First Address Line of The User"
                name="addressLine1"
                value={addressLine1}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"text"}
                placeholder="Last Address Line of The User"
                name="addressLine2"
                value={addressLine2}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"text"}
                placeholder="Tow/City Of The User"
                name="addressTC"
                value={addressTC}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"text"}
                placeholder="Enter Post Code"
                name="addressPostcode"
                value={addressPostcode}
                onChange={(e) => onInputChange(e)}
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
