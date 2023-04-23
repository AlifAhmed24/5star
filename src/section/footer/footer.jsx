import React from "react";
import {Link} from 'react-router-dom'
import logo from "../../Assets/logo.png";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerWrapper">
          <div className="footer-details">
            <img src={logo} alt="fivestart" />
            <h1>5 Start Liquiadators</h1>
            <p>
              Helping You Through Life’s Transitions <br /> and Funding the Next
              Chapter <br /> of Your Life.
            </p>
          </div>
          <div className="footer-navigate">
            <h3>Navigate Link</h3>
            <div className="navigate-link">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/mission">Mission</Link>
            <Link to="/services">Services</Link>
            <Link to="/areas">Areas</Link>
            <Link to="/staff">Our Staff</Link>
            <Link to="/rates">Rates</Link>
            <Link to="/whyus">Why Us</Link>
            <Link to="/afterthescale">After the Sale</Link>
            <Link to="/contact">Contact us</Link>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <div className="footer-contact-wrapper">
              <div>
                <span class="material-symbols-outlined">call</span>
                <p>423-497-2750</p>
              </div>
              <div>
                <span class="material-symbols-outlined">mail</span>
                <p>info@5startLiquidators.com</p>
              </div>
              <div>
                <span class="material-symbols-outlined">public</span>
                <a href="http://www.5startLiquidators.com" target="_blank">www.5startLiquidators.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
