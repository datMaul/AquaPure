import { Link } from "react-router-dom";
import "./TestkitEntry.css";

export default function TestkitEntry() {
  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }
  return (
    <div className="Accounts-Content">
      <div className="TestKitEntry-Content">
        <div className="Row-1-Content">
          <h2> Testkit Entry </h2>
        </div>

        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label>Unique ID:</label>
            <br /> <br />
            <label>pH:</label>
            <br /> <br />
            <label>Total Alkalinity:</label>
            <br /> <br />
            <label>Total Hardness:</label>
            <br /> <br />
            <label>Nitrate:</label>
            <br /> <br />
            <label>Nitrite:</label>
            <br /> <br />
            <label>Lead:</label>
            <br /> <br />
            <label>Manganese:</label>
            <br /> <br />
            <label>Coliform Bacteria:</label>
          </div>

          <div className="Input-Content">
            <form
            // onSubmit={(e) => onSubmit(e)}
            >
              <input
                type={"text"}
                placeholder="Unique ID"
                name="uniqueID"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="pH"
                name="pH"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Total Alkalinity"
                name="totalAlkalinity"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Total Hardness"
                name="totalHardness"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Nitrite"
                name="nitrite"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Nitrate"
                name="nitrate"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Lead"
                name="lead"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Manganese"
                name="manganese"
                // value={}
                // onChange={(e) => onInputChange(e)}
              />
              <br />
              <input
                type={"number"}
                placeholder="Coliform Bacteria"
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
