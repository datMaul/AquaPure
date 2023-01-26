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

      <div className="LoyaltyPoints-Content">
        <h2> Loyalty Points </h2>

        <text>Loyalty Points: </text>
        <p> Points </p>
      </div>
    </div>
  );
}
