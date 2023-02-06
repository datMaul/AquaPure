import axios from "axios";
import { Link } from "react-router-dom";
import "./TestkitEntry.css";

export default function TestkitEntry() {
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
      <div className="TestKitEntry-Content">
        <h2> Testkit Entry </h2>
      </div>
    </div>
  );
}
