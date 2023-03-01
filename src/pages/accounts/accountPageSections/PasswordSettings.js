import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AccountPageSections.css";

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
      <div className="AccountPageSection-Content">
        <div className="Row-1-Content">
          <h2> Password Settings </h2>
          <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br />
        </div>

        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label> Password: </label>
          </div>

          <div className="Inputs-Content">
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type={"text"}
                placeholder="Password of The User"
                name="password"
                value={password}
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
