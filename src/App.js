import "./App.css";
import React from "react";

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
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Navbar-container").style.backgroundColor =
      "#162427";
  } else if (window.innerWidth >= 950) {
    document.getElementById("Navbar-container").style.backgroundColor =
      "#16242700";
    document.getElementById("Navbar-container").style.transition =
      "background-color 0.15s ease-in-out";
  }
}

/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return <div className="App"></div>;
}

export default App;
