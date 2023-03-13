import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AccountPageSections.css";

export default function LoyaltyPoints() {
  const [loyaltyPoints, setLoyaltyPoints] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");

    async function fetchLoyaltyPoints() {
      fetch("http://localhost:8080/scores/getAll")
        .then((response) => response.json())
        .then((points) => {
          const scores = points.find((scores) => scores.email === email);
          if (scores) {
            setLoyaltyPoints(scores.score);
          }
        });
    }

    fetchLoyaltyPoints();
  }, []);

  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className = "Loyalty-Page">
      <div className="Container">
      <h1 className = "Loyalty-Title"> Loyalty Points </h1>
      <p className="Amount-of-Points">{loyaltyPoints}</p>
      <h1 className = "Loyalty-Info-Title"> What are Loyalty Points? </h1>
      <p className="Loyalty-Info">Loyalty points can be attained when playing the Aquapure quiz found under the games tab. these loyalty points can be applied in our shop to serve as a discount</p>
      <p className="Loyalty-Info">Try our quiz using the button below</p>
      <ul className="Quiz-Buttons">
          <li className="Quiz-Info-Button">
              <a href="/game">Play Game</a>
          </li>
      </ul>
      </div> 
    </div>
  );
}
