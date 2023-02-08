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
      <h2> Accounts Settings </h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="Name"> First Name : </label>
          <input
            type={"text"}
            placeholder="First Name of The User"
            name="firstName"
            value={firstName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label htmlFor="Name"> Last Name : </label>
          <input
            type={"text"}
            placeholder="Last Name of The User"
            name="lastName"
            value={lastName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> Date of Birth : </label>
          <input
            type={"date"}
            placeholder="Enter Date of Birth"
            name="doB"
            value={doB}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> Phone Number : </label>
          <input
            type={"number"}
            placeholder="Enter Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> E-Mail : </label>
          <input
            type={"text"}
            placeholder="Enter EMail"
            name="eMail"
            value={eMail}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> Address Line 1 : </label>
          <input
            type={"text"}
            placeholder="First Address Line of The User"
            name="addressLine1"
            value={addressLine1}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> Address Line 2 : </label>
          <input
            type={"text"}
            placeholder="Last Address Line of The User"
            name="addressLine2"
            value={addressLine2}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> Town/City : </label>
          <input
            type={"text"}
            placeholder="Tow/City Of The User"
            name="addressTC"
            value={addressTC}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label> Postcode : </label>
          <input
            type={"text"}
            placeholder="Enter Post Code"
            name="addressPostcode"
            value={addressPostcode}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button id="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
