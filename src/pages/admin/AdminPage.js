import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="AdminPage">
      <div className="AdminPage-Content">
        <h1> Admin Page </h1>
        <div className="AdminPage-NavBar">
          <li>
            <Link to="/admin/signuplog">User Details</Link>
          </li>
          <li>
            <Link to="/admin/testkitlog">Test Kit</Link>
          </li>
        </div>
      </div>
    </div>
  );
}
