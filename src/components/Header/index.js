import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { useTheme } from "../..//context/darkThemeContext";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import {
  LIGHT_THEME_ICON_URL,
  DARK_THEME_ICON_URL,
} from "../../utils/constants";

const Header = () => {
  const { darkTheme, toggleDarkTheme } = useTheme();
  const location = useLocation(); // Get current location object
  const { pathname } = location; // Extract pathname from location object

  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleThemeToggle = () => {
    toggleDarkTheme();
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const light = (
    <img src={LIGHT_THEME_ICON_URL} alt="light" className="theme-img" />
  );

  const dark = (
    <img src={DARK_THEME_ICON_URL} alt="moon" className="theme-img" />
  );

  return (
    <div className="header">
      <h1 className="logo">Tb.</h1>
      <ul className="nav-link-list">
        <li className={`nav-link ${pathname === "/" ? "active-nav-link" : ""}`}>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li
          className={`nav-link ${
            pathname === "/skills" ? "active-nav-link" : ""
          }`}
        >
          <Link to="/skills" className="link">
            SKILLS
          </Link>
        </li>

        <li
          className={`nav-link ${
            pathname === "/projects" ? "active-nav-link" : ""
          }`}
        >
          <Link to="/projects" className="link">
            PROJECTS
          </Link>
        </li>
        <li
          className={`nav-link ${
            pathname === "/about" ? "active-nav-link" : ""
          }`}
        >
          <Link to="/about" className="link">
            ABOUT
          </Link>
        </li>

        <li
          className={`nav-link ${
            pathname === "/blogs" ? "active-nav-link" : ""
          }`}
        >
          <a
            className="link"
            href="https://quickreadsblogs.netlify.app/"
            target="__blank"
          >
            BLOGS
          </a>
        </li>
        <li className="nav-link">
          <button onClick={handleThemeToggle} className="theme-button">
            {darkTheme ? dark : light}
          </button>
        </li>
      </ul>
      {/* Mobile Navmenu */}
      <div ref={ref} className="hamburger">
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          className="hamburger"
        />
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-mobile-link-list">
            <li
              className={`mobile-nav-link ${
                pathname === "/" ? "mobile-active-nav-link" : ""
              }`}
            >
              <Link to="/" className="mobile-link" onClick={handleCloseMenu}>
                HOME
              </Link>
            </li>
            <li
              className={`mobile-nav-link ${
                pathname === "/skills" ? "mobile-active-nav-link" : ""
              }`}
            >
              <Link
                to="/skills"
                className="mobile-link"
                onClick={handleCloseMenu}
              >
                SKILLS
              </Link>
            </li>

            <li
              className={`mobile-nav-link ${
                pathname === "/projects" ? "mobile-active-nav-link" : ""
              }`}
            >
              <Link
                to="/projects"
                className="mobile-link"
                onClick={handleCloseMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li
              className={`mobile-nav-link ${
                pathname === "/about" ? "mobile-active-nav-link" : ""
              }`}
            >
              <Link
                to="/about"
                className="mobile-link"
                onClick={handleCloseMenu}
              >
                ABOUT
              </Link>
            </li>

            <li
              className={`mobile-nav-link ${
                pathname === "/blogs" ? "mobile-active-nav-link" : ""
              }`}
            >
              <a
                className="mobile-link"
                href="https://quickreadsblogs.netlify.app/"
                target="__blank"
              >
                BLOGS
              </a>
            </li>

            <li
              className="mobile-nav-link theme-button mobile-link"
              onClick={handleThemeToggle}
            >
              THEME {darkTheme ? dark : light}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
