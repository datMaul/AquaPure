import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <nav className="Navbar">
        <div className="Navbar-left">
          <a className="Navbar-logo" href="#">
            <img src={logo} alt="logo" width="112" height="28" />
          </a>
          <ul className="Navbar-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Map</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
        <div className="Navbar-end">
          <i className="material-icons"><a href="#">menu</a></i>
          <a className="Button Button-signin" href="#">Sign In</a>
          <a className="Button Button-signup" href="#">Sign Up</a>
        </div>
      </nav>

      <header className="Header">
        <div className="Header-hero">
          <div className="Header-content">
            <h1>Test</h1>
            <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p/>
            <div className="Header-buttons">
              <a href="#" className="Button Button-readmore">Read More</a>
              <a href="#" className="Button Button-signup">Sign Up</a>
            </div>
          </div>
        </div>
      </header>

      <body className="Home-contents">
        <h1>The Problem</h1>
        <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </body>

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
  );
}

export default App;
