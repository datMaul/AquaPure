import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./aqlogo.png";
import { useState, useEffect } from "react";
import { IoBoatSharp } from "react-icons/io5"
import * as Popper from "@popperjs/core"
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="logo" width="151" height="43" />
      </Link>
      <ul className="shipcon">
        <CustomLink to="/map">Map</CustomLink>
        <CustomLink to="/testkit">Test Kit</CustomLink>
        <CustomLink to="/game">Game</CustomLink>
        <CustomLink to="/donations" className="shipcon" >Donations</CustomLink>
        <CustomLink to="/cart"><IoBoatSharp fontSize={21} className="shipcon_1" /></CustomLink>
        <CustomLink to="/shop" className="shipcon" >Shop</CustomLink>
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