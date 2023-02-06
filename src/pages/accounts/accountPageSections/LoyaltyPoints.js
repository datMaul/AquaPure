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
    <div className="Accounts-Content">
      <h2> Loyalty Points </h2>

      <text>Loyalty Points: </text>
      <p> Points </p>
    </div>

  );
}
