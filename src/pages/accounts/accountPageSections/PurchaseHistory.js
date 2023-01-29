import { Link } from "react-router-dom";
import axios from "axios";
import "./PurchaseHistory.css";

export default function PurchaseHistory() {
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
    <div className="PurchaseHistory">
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

      <div className="PurchaseHistory-Content">
        <h2> Purchase History </h2>

        <text>Purchase History: </text>
        <p> History </p>
      </div>
    </div>
  );
}
