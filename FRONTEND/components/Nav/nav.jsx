import React, { useState } from "react";

export default function Nav() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
    {/* Half-circle button that opens/closes the navbar */}
    <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>    </div>
      {/* Navbar Links */}
    {/* Navbar Links (Initially hidden, visible when 'isOpen' is true) */}
    <ul className={`navigation ${isOpen ? 'show' : ''}`}>
        <li className="navbar-item">
          <a href="#Home" >
            Home
          </a>
        </li>   
         {/*-------  */}
         <li className="navbar-item">
         <a href="#AboutMe" >
            About me
          </a>
        </li>  
        {/* --------- */}
         <li className="navbar-item">
         <a href="#Resume" >
            Resume
          </a>
        </li>  
         {/*----------  */}
         <li className="navbar-item">
         <a href="#Portfolio" >
            Portfolio
          </a>
        </li> 
          {/*-----------  */}
          <li className="navbar-item">
         <a href="#ContactMe" >
            Contact me
          </a>
        </li>
        </ul>
    </nav>
  );
}
