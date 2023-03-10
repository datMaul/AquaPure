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
    <div className="Accounts-Content">
      <div className="AccountPageSection-Content">
        <div className="Row-1-Content">
          <h2> Loyalty Points </h2>
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br />
        </div>

        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label>Loyalty Points:</label>
          </div>

          <div className="Inputs-Content">
            <form>
              <input
                type={"text"}
                placeholder={loyaltyPoints}
                name="loyaltyPoints"
                readOnly={true}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
