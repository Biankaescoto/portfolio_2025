import React from "react";

export default function Nav() {
  return (
    <nav className="navbar">
      {/* Navbar Links */}
      <p className="nav-name-title"> Bianka Escoto </p>
      <ul className="navigation">
        <li className="navbar-item">
          <a href="#Home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#AboutMe">About Me</a>
        </li>
        <li className="navbar-item">
          <a href="#Resume">Resume</a>
        </li>
        <li className="navbar-item">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="navbar-item">
          <a href="#ContactMe">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

