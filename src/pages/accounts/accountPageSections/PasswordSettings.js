import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PasswordSettings.css";

export default function PasswordSettings() {
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

  const { password } = user;

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
      navigating("/accounts/passwordSettings");
    } catch (err) {
      console.log(err);
      alert("Your Changes Have Not Been Saved!");
      navigating("/accounts/passwordSettings");
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
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("token");
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
        console.log("there was an error");
      });
  };

  return (
    <div className="Accounts-Content">
      <h2> Password Settings </h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label> Password : </label>
          <input
            type={"text"}
            placeholder="Enter Overwrite Password"
            name="password"
            value={password}
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
