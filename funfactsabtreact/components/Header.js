import logo from "./react-logo.png";
import React from "react";

function Header() {
    return(
    <header>
      <nav className="nav">
        <img src={logo} alt="" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>)
  }

  export default H eader;