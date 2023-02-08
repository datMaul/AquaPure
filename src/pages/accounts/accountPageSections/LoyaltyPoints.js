import { Link } from "react-router-dom";
import "./LoyaltyPoints.css";

export default function LoyaltyPoints() {
  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className="Accounts-Content">
      <h2> Loyalty Points </h2>

      <text>Loyalty Points: </text>
      <p> Points </p>
    </div>
  );
}
