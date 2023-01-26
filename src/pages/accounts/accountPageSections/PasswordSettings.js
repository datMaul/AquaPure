import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PasswordSettings.css";

export default function PasswordSettings() {
  let navigate = useNavigate();

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
    await axios.put(
      `http://localhost:8080/User/${localStorage.getItem("user_ID")}`,
      user
    );
    navigate("/accounts");
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
    <div className="PasswordSettings">
      <div className="Accounts-Navbar">
        <li>
          <Link to="/accounts" id="AccountSettings-Link">
            Account Settings
          </Link>
        </li>
        <li>
          <Link to="/accounts/passwordSettings" id="PasswordSettings-Link">
            Password Settings
          </Link>
        </li>
        <li>
          <Link to="/accounts/purchaseHistory" id="PurchaseHistory-Link">
            Purchase History
          </Link>
        </li>
        <li>
          <Link to="/accounts/loyaltyPoints" id="LoyaltPoints-Link">
            Loyalty Points
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}> Logout </button>
        </li>
      </div>

      <div className="PasswordSettings-Content">
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
