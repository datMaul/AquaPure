import { Link } from "react-router-dom";
import "./AccountPageSections.css";

export default function TestkitEntry() {
  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className="Accounts-Content">
      <div className="AccountPageSection-Content">
        <div className="Row-1-Content">
          <h2> Testkit Entry </h2>
        </div>

        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label>Unique ID:</label>
            <br />
            <label>pH:</label>
            <br />
            <label>Total Alkalinity:</label>
            <br />
            <label>Total Hardness:</label>
            <br />
            <label>Nitrate:</label>
            <br />
            <label>Nitrite:</label>
            <br />
            <label>Lead:</label>
            <br />
            <label>Manganese:</label>
            <br />
            <label>Coliform Bacteria:</label>
          </div>

          <div className="Inputs-Content">
            <form
            // onSubmit={(e) => onSubmit(e)}
            >
              <input
                type={"text"}
                placeholder="Enter Unique ID"
                name="uniqueID"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter pH"
                name="pH"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Total Alkalinity"
                name="totalAlkalinity"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Total Hardness"
                name="totalHardness"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Nitrite"
                name="nitrite"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Nitrate"
                name="nitrate"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Lead"
                name="lead"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Manganese"
                name="manganese"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Enter Coliform Bacteria"
                name="coliformBacteria"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <button id="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
