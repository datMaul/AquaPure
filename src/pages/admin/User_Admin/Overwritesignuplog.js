import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Overwritesignuplog.css";

export default function Overwritesignuplog() {
  let navigate = useNavigate();

  const { user_ID } = useParams();

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
    password,
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
    await axios.put(`http://localhost:8080/User/${user_ID}`, user);
    navigate("/admin");
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/User/${user_ID}`);
    setUser(result.data);
  };

  return (
    <div className="Overwrite_Container">
      <div className="row">
        <div className="TestKit_infor">
          <h2 className="Kit_info">Overwrite User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="Name" className="OW_TK_Labes">
                {" "}
                User First Name :{" "}
              </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="First Name of The User"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Name" className="OW_TK_Labes">
                {" "}
                User Last Name :{" "}
              </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="Last Name of The User"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Address Line 1 : </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="First Address Line of The User"
                name="addressLine1"
                value={addressLine1}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Address Line 2 : </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="Last Address Line of The User"
                name="addressLine2"
                value={addressLine2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Town/City : </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="Tow/City Of The User"
                name="addressTC"
                value={addressTC}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Postcode : </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="Enter Post Code"
                name="addressPostcode"
                value={addressPostcode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Date of Birth : </label>
              <input
                type={"date"}
                className="from-control"
                placeholder="Enter Date of Birth"
                name="doB"
                value={doB}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Password : </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="Enter Overwrite Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> Phone Number : </label>
              <input
                type={"number"}
                className="from-control"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label className="OW_TK_Labes"> E-Mail : </label>
              <input
                type={"text"}
                className="from-control"
                placeholder="Enter EMail"
                name="eMail"
                value={eMail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="SubmitBTN_OW_TK" type="submit">
              Submit
            </button>
            <Link className="CancelBTN_OW_TK" to="/admin">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
