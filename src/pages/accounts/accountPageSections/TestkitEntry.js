import { Link } from "react-router-dom";
import "./AccountPageSections.css";

export default function TestkitEntry() {
  // if (!localStorage.getItem("token")) {
  //   return <Link to="/" />;
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    if (form.get("confirmation") == null) {
      alert("Please click the checkbox");
      return;
    }

    const data = Object.fromEntries(form.entries());

    console.log(data);
  }

  return (
    <div className="Accounts-Content">
      <div className="AccountPageSection-Content">
        <div className="Row-1-Content">
          <h2>Testkit Entry</h2>
        </div>
        <div className="Row-2-Content">
          <div className="Labels-Content">
            <label htmlFor="uniqueID">Unique ID:</label>
            <br />
            <label htmlFor="pH">pH:</label>
            <br />
            <label htmlFor="totalAlkalinity">Total Alkalinity:</label>
            <br />
            <label htmlFor="totalHardness">Total Hardness:</label>
            <br />
            <label htmlFor="nitrite">Nitrite:</label>
            <br />
            <label htmlFor="lead">Lead:</label>
            <br />
            <label htmlFor="manganese">Manganese:</label>
            <br />
            <label htmlFor="coliformBacteria">Coliform Bacteria:</label>
          </div>
          <div className="Inputs-Content">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="uniqueID"
                name="uniqueID"
                placeholder="Enter Unique ID"
                minLength={1}
              />
              <br />
              <input
                type="number"
                id="pH"
                name="pH"
                placeholder="Enter pH"
                min="0"
                max="14"
              />
              <br />
              <input
                type="number"
                id="totalAlkalinity"
                name="totalAlkalinity"
                placeholder="Enter Total Alkalinity"
              />
              <br />
              <input
                type="number"
                id="totalHardness"
                name="totalHardness"
                placeholder="Enter Total Hardness"
              />
              <br />
              <input
                type="number"
                id="nitrite"
                name="nitrite"
                placeholder="Enter Nitrite"
              />
              <br />
              <input
                type="number"
                id="lead"
                name="lead"
                placeholder="Enter Lead"
              />
              <br />
              <input
                type="number"
                id="manganese"
                name="manganese"
                placeholder="Enter Manganese"
              />
              <br />
              <input
                type="number"
                id="coliformBacteria"
                name="coliformBacteria"
                placeholder="Enter Coliform Bacteria"
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
