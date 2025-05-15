import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";


export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const Landing =
    location.pathname === "/" || location.pathname === "/Landing";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      {/* Navbar Links */}
      <p className="nav-name-title"> Bianka Escoto </p>
      <ul className="navigation">
        <li className="navbar-item">
        <NavLink to="/Landing" > Home </NavLink>
        </li>
        {/* second split */}
        <li className="navbar-item">
        <NavLink to="/Experience" > Experience </NavLink>     
        </li>
        {/* third split  */}
        <li className="navbar-item"> 
        {/* third split */}
        <NavLink to="/Projects" > Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

