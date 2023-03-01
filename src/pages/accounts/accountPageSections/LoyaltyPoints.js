import { Link } from "react-router-dom";
import "./AccountPageSections.css";

export default function LoyaltyPoints() {
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
                placeholder="Loyalty Points of The User"
                name="loyaltyPoints"
                readOnly={true}
                // value={}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
