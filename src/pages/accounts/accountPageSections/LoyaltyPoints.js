import axios from "axios";
import { Link } from "react-router-dom";
import "./LoyaltyPoints.css";

export default function LoyaltyPoints() {
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
    <div className="LoyaltyPoints">
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

      <div className="LoyaltyPoints-Content">
        <h2> Loyalty Points </h2>

        <text>Loyalty Points: </text>
        <p> Points </p>
      </div>
    </div>
  );
}
