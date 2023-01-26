import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./aqlogo.png";
import { useState, useEffect } from "react";
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <nav className="nav">
          <Link to="/" className="site-title">
            <img src={logo} alt="logo" width="151" height="43" />
          </Link>
          <div className="nav-right">
            <ul>
              <CustomLink to="/map">Map</CustomLink>
              <CustomLink to="/testkit">Test Kit</CustomLink>
              <CustomLink to="/game">Game</CustomLink>
              <CustomLink to="/donations">Donations</CustomLink>
              <CustomLink to="/shop">Shop</CustomLink>
              <CustomLink to="/accounts">Account</CustomLink>
            </ul>
            <CustomLink to="/accounts/login" className="signin-btn button">Sign In</CustomLink>
          </div>
        </nav>
      </div>
    </div>
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