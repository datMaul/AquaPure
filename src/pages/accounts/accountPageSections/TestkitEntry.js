import { Link } from "react-router-dom";
import "./AccountPageSections.css";

export default function TestkitEntry() {
  if (!localStorage.getItem("token")) {
    return <Link to="/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    if (form.get("confirmation") == null) {
      alert("Please click the checkbox");
      return;
    }

    const data = Object.fromEntries(form.entries())

    console.log(data);
  }

  return (
    <div className="Accounts-Content">
      <div>
        <div>
          <h2>Testkit Entry</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="uniqueID">Unique ID:</label>
            <input
              type="text"
              id="uniqueID"
              name="uniqueID"
              placeholder="Enter Unique ID"
              minLength={1}
            />

            <br />

            <label htmlFor="pH">pH:</label>
            <input
              type="number"
              id="pH"
              name="pH"
              placeholder="Enter pH"
              min="0"
              max="14"
            />

            <br />

            <label htmlFor="totalAlkalinity">Total Alkalinity:</label>
            <input
              type="number"
              id="totalAlkalinity"
              name="totalAlkalinity"
              placeholder="Enter Total Alkalinity"
            />

            <br />
            <label htmlFor="totalHardness">Total Hardness:</label>
            <input
              type="number"
              id="totalHardness"
              name="totalHardness"
              placeholder="Enter Total Hardness"
            />

            <br />
            <label htmlFor="nitrite">Nitrite:</label>
            <input
              type="number"
              id="nitrite"
              name="nitrite"
              placeholder="Enter Nitrite"
            />

            <br />
            <label htmlFor="lead">Lead:</label>
            <input
              type="number"
              id="lead"
              name="lead"
              placeholder="Enter Lead"
            />

            <br />
            <label htmlFor="manganese">Manganese:</label>
            <input
              type="number"
              id="manganese"
              name="manganese"
              placeholder="Enter Manganese"
            />

            <br />
            <label htmlFor="coliformBacteria">Coliform Bacteria:</label>
            <input
              type="number"
              id="coliformBacteria"
              name="coliformBacteria"
              placeholder="Enter Coliform Bacteria"
            />

            <br />
            <input type="checkbox" id="confirmation" name="confirmation" />
            <label htmlFor="confirmation">
              I would like to contribute to the cause by submitting this data to
              AquaPure and making it open to public
            </label>

            <br />
            <button id="submitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

