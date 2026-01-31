import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
// removed sun and moon icons for now
// import { FaMoon, FaSun } from "react-icons/fa";
import { Toggle } from "../Toggle/Toggle";

// TODO Finish light/dark mode functionality, style the button 
// TODO making a component for the toggle instead of hard coding it into my navbar

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  // const [theme, setTheme] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();
  const Landing =
    location.pathname === "/" || location.pathname === "/Landing";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // New Theme code 
  // useEffect (() =>{
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) setTheme(savedTheme);
  //   else setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  // }, []);

  // useEffect(() => {
  //   document.body.className = theme;
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  // End new theme code


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
        {/* third split */}
        <NavLink to="/Projects" > Projects</NavLink>
        </li>
        {/* third split  */}
       <li className="navbar-item">
        <NavLink to="/Experience" > Experience </NavLink>     
        </li>
        {/* <div className="App" data-theme={isLight ? "light" : "dark"}>
        <Toggle
          isChecked={isLight}
          handleChange={() => setIsLight(!isLight)}>
        </Toggle>
            </div> */}

        {/* Theme toggle button */}
        {/* removed to make it a component */}
        {/* <li className="navbar-item">
        <button onClick={toggleTheme} 
        // New Class Name i need to style in scss. 
        className="theme-toggle-btn">
          {data-theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
            </li> */}
      </ul>
    </nav>
  );
}

