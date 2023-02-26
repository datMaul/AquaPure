import { Link } from "react-router-dom";
import "./LoyaltyPoints.css";

export default function LoyaltyPoints() {
  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className="Accounts-Content">
      <div className="LoyaltyPoints-Content">
        <div className="Row-1-Content">
          <h2> Loyalty Points </h2>
        </div>

        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label>Loyalty Points:</label>
          </div>

          <div className="Input-Content">
            <form
            // onSubmit={(e) => onSubmit(e)}
            >
              <input
                type={"text"}
                placeholder="Loyalty Points"
                name="loyaltyPoints"
                readOnly={true}
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
