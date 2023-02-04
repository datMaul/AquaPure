import axios from "axios";
import { Link } from "react-router-dom";
import "./TestkitEntry.css";

export default function TestkitEntry() {
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
    <div className="TestKitEntry">
      <div className="Accounts-Navbar">
        <Link to="/accounts" className="AccountLinks" id="AccountSettings-Link">
          Account Settings
        </Link>
        <Link
          to="/accounts/passwordSettings"
          className="AccountLinks"
          id="PasswordSettings-Link"
        >
          Password Settings
        </Link>
        <Link
          to="/accounts/testkitEntry"
          className="AccountLinks"
          id="TestKitEntry-Link"
        >
          Testkit Entry
        </Link>
        <Link
          to="/accounts/purchaseHistory"
          className="AccountLinks"
          id="PurchaseHistory-Link"
        >
          Purchase History
        </Link>
        <Link
          to="/accounts/loyaltyPoints"
          className="AccountLinks"
          id="LoyaltPoints-Link"
        >
          Loyalty Points
        </Link>
        <button onClick={handleLogout} className="AccountLinks">
          {" "}
          Logout{" "}
        </button>
      </div>

      <div className="TestKitEntry-Content">
        <h2> Testkit Entry </h2>

        {/* pH, Total Alkalinity, Total Hardness, Nitrite, Nitrate, Lead, Manganese, Coliform Bacteria */}

        <form
        // onSubmit={(e) => onSubmit(e)}
        >
          <div>
            <label> pH : </label>
            <input
              type={"number"}
              placeholder="pH"
              name="pH"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Total Alkalinity : </label>
            <input
              type={"number"}
              placeholder="Total Alkalinity"
              name="totalAlkalinity"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Total Hardness : </label>
            <input
              type={"number"}
              placeholder="Total Hardness"
              name="totalHardness"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Nitrite : </label>
            <input
              type={"number"}
              placeholder="Nitrite"
              name="nitrite"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Nitrate : </label>
            <input
              type={"number"}
              placeholder="Nitrate"
              name="nitrate"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Lead : </label>
            <input
              type={"number"}
              placeholder="Lead"
              name="lead"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Manganese : </label>
            <input
              type={"number"}
              placeholder="Manganese"
              name="manganese"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label> Coliform Bacteria : </label>
            <input
              type={"number"}
              placeholder="Coliform Bacteria"
              name="coliformBacteria"
              // value={}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <button id="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
