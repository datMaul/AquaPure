import { useNavigate, useMatch } from "@reach/router";
import axios from "axios";

export default function AdminSidebar({ setSelectedLink }) {
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
    <aside className="sidebar">
      <input
        className="search"
        type="text"
        id="search"
        name="search"
        placeholder="Search"
      />
      <ul>
        <CustomLink
          to="/admin/signuplog"
          onClick={() => setSelectedLink("/admin/signuplog")}
        >
          User Accounts
        </CustomLink>
        <CustomLink
          to="/admin/testkitlog"
          onClick={() => setSelectedLink("/admin/testkitlog")}
        >
          Test Kit Record
        </CustomLink>
        <CustomLink to="/" onClick={handleLogout}>
          Logout
        </CustomLink>
      </ul>
    </aside>
  );
}

function CustomLink({ to, children, onClick, ...props }) {
  const navigate = useNavigate();
  const isActive = useMatch({ path: to });

  function handleClick(event) {
    event.preventDefault();
    navigate(to);
    onClick();
  }

  return (
    <li className={isActive ? "active" : ""}>
      <a href="#" onClick={handleClick} {...props}>
        {children}
      </a>
    </li>
  );
}
