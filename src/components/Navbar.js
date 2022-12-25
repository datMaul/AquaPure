import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./aqlogo.png";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="logo" width="151" height="43" />
      </Link>
      <ul>
        <CustomLink to="/map">Map</CustomLink>
        <CustomLink to="/testkit">Test Kit</CustomLink>
        <CustomLink to="/game">Game</CustomLink>
        <CustomLink to="/donations">Donations</CustomLink>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/accounts">Account</CustomLink>
        <CustomLink to="/accounts/login">Sign In</CustomLink>
      </ul>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
