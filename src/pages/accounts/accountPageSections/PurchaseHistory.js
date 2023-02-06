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
    <div className="Accounts-Content">
      <div className="PurchaseHistory-Content">
        <h2> Purchase History </h2>

        <text>Purchase History: </text>
        <p> History </p>
      </div>
    </div>
  );
}
