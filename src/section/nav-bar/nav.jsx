import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./nav.css";

function Nav() {
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    });
  }, []);

  function menuToggle() {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }
  function closeNav() {
    setIsMenuOpen(false);
  }

  return (
    <nav className={colorChange && "navbar colorChange"}>
      <div className="container">
        <div
          style={{ padding: colorChange && "0.5rem 0rem" }}
          className="nav-bar"
        >
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-menu" style={{ right: isMenuOpen ? "0" : "" }}>
            <span class="material-symbols-outlined" onClick={closeNav}>
              close
            </span>
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active-link">
              About Us
            </NavLink>
            <NavLink to="/mission" activeClassName="active-link">
              Mission
            </NavLink>
            <NavLink to="/services" activeClassName="active-link">
              Services
            </NavLink>
            <NavLink to="/areas" activeClassName="active-link">
              Areas
            </NavLink>
            <NavLink to="/staff" activeClassName="active-link">
              Our Staff
            </NavLink>
            <NavLink to="/rates" activeClassName="active-link">
              Rates
            </NavLink>
            <NavLink to="/whyus" activeClassName="active-link">
              Why Us
            </NavLink>
            <NavLink to="/afterthesale" activeClassName="active-link">
              After the Sale
            </NavLink>
            <NavLink to="/contact" activeClassName="active-link">
              Contact us
            </NavLink>
            <NavLink to="/faq" activeClassName="active-link">
              FAQ
            </NavLink>
          </div>
          <div className="menu-icon">
            <span onClick={menuToggle} class="material-symbols-outlined">
              menu
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
