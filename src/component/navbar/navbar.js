import React from "react";
import "./navbar.css"
import Logo from "../../Images/mainLogo.png"

export const Navbar = ({ color1, color2, color3, color4, color5, color6 }) => {
  return (
    <div>
      <div className="navbar-container">
        <div className="nav-logo-container">
          <img className="nav-logo" src={Logo} />
        </div>
        <div className="nav-links">
          <div className="nav-link" style={{ color1 }}>
            Home
          </div>
          <div className="nav-link" style={{ color2 }}>
            About Us
          </div>
          <div className="nav-link" style={{ color3 }}>
            Blog
          </div>
          <div className="nav-link" style={{ color4 }}>
            Our Approach
          </div>
          <div className="nav-link back-nav-link">
            Our Services
          </div>
          <div className="nav-link border-nav-link">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};