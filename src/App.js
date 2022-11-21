import logo from './logo-banner.png';
//import arrowdown from './arrow-down.png';
import './App.css';
import React from 'react';

function expandBurger() {
  var navList = document.getElementById("Navbar-list");
  var contents = document.getElementsByClassName("Page-contents")[0];
  var icon = document.getElementsByClassName("Burger")[0];
  if (navList.className === "Navbar-list") {
    navList.className += "-expanded";
    contents.style.filter = "brightness(50%)";
    icon.innerHTML = "<a href='javascript:void(0);'>close</a>";
  } else {
    navList.className = "Navbar-list";
    contents.style.filter = "brightness(100%)";
    icon.innerHTML = "<a href='javascript:void(0);'>menu</a>";
  }
}

/* Navbar bg color change on scroll */
window.onscroll = function() {scrollFunction()};
const navContainer = document.getElementById("Navbar-container");
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navContainer.style.backgroundColor = "#162427";
  } else if (window.innerWidth >= 950) {
    navContainer.style.backgroundColor = "#16242700";
    navContainer.style.transition = "background-color 0.15s ease-in-out";
  }
}

/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  const [active, setActive] = React.useState("Home");

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className='Navbar-container' id="Navbar-container" onload="scrollFunction()">
        <nav className="Navbar">
          <div className="Navbar-left">
            <a className="Navbar-logo" href="#">
              <img src={logo} alt="logo" width="151" height="43" />
            </a>
            
          </div>
          <div className="Navbar-right">
            <ul className="Navbar-list" id="Navbar-list">
              <li><a className={active === "Home" ? "active" : ""} href="#" onClick={() => setActive("Home")}>Home</a></li>
              <li><a className={active === "Map" ? "active" : ""} href="#" onClick={() => setActive("Map")}>Map</a></li>
              <li><a className={active === "Game" ? "active" : ""} href="#" onClick={() => setActive("Game")}>Game</a></li>
              <li><a className={active === "Donations" ? "active" : ""} href="#" onClick={() => setActive("Donations")}>Donations</a></li>
              <li><a className={active === "Shop" ? "active" : ""} href="#" onClick={() => setActive("Shop")}>Shop</a></li>
              <li className="Mobile-only"><a className={active === "Mobile-signin" ? "active" : ""} href="#" onClick={() => setActive("Mobile-signin")}>Sign In</a></li>
            </ul>
            <i className="Burger material-icons" onClick={expandBurger}><a href="javascript:void(0);">menu</a></i>
            <a className="Button Button Button-signin" href="#">Sign In</a>
          </div>
        </nav>
      </div>

      <div className="Page-contents">
        <header className="Header">
          <div className="Header-hero">
            <div className="Header-content">
              <h1>Help clean water</h1>
              <p>Bring greater awarness to water quality by contributing data to our map and sharing it with others, or by playing our game [game_name], or by simply donating to our selected charities. Register now to submit your first test-kit results and to learn more what they mean.</p>
              <p/>
              <div className="Header-buttons">
                <a href="#" className="Button Button-readmore">Read More</a>
                <a href="#" className="Button Button-clear Button-getinvolved">Get Involved</a>
              </div>
            </div>
          </div>
        </header>

        <div className="Body-container">
          <body className="Home-contents">
            <h1>The Problem</h1>
            <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </body>
        </div>

        <footer className="Footer">
          <div className="content">
            <div>
              <p>All rights reserved. © 2022 AquaPure.</p>
            </div>
            <div>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a>|</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
