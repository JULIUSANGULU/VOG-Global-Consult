import React from "react";
import "./navbar.css";
import Logo from "../../Images/mainLogo.png";
import { Link } from "react-router-dom";

export const OurApproachNavbar = ({ color }) => {
  return (
    <div>
      <div className="navbar-container">
        <div className="nav-logo-container">
          <img className="nav-logo" src={Logo} alt="" />
        </div>
        <div className="nav-links">
          <Link to={"/"} className="navigation-links">
            <div className="nav-link">Home</div>
          </Link>
          <Link to={"/AboutUs"} className="navigation-links">
            <div className="nav-link">About Us</div>
          </Link>
          <Link to={"/Blog"} className="navigation-links">
            <div className="nav-link">Blog</div>
          </Link>
          <Link to={"/OurApproach"} className="navigation-links">
            <div className="nav-link" style={{ color }}>
              Our Approach
            </div>
          </Link>
          <Link to={""} className="navigation-links">
            <div className="nav-link back-nav-link">Our Services</div>
          </Link>
          <Link to={""} className="navigation-links">
            <div className="nav-link border-nav-link">Contact Us</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

OurApproachNavbar.defaultProps = {
  color: "#517151",
};