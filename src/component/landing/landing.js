import React from "react";
import "./landing.css";
import HandCoin from "../../Images/HandCoin.png";
import Coins from "../../Images/coins.png";
import Testimony from "../../Images/testimony.png";
import RectangleBetween from "../../Images/RectangleBetween.svg";
import DoubleArrowRight from "../../Images/double-arrow-right-svgrepo-com.png";

export const Landing = ({ color }) => {
    return (
      <div className="landing-container">
        <div className="landing-intro">
          <div className="landing-intro-text-and-get-started">
            <div className="landing-intro-text1-container">
              <div className="landing-intro-text1">
                Ensuring Compliance, Maximizing Efficiency, Driving Success
              </div>
              <div className="landing-intro-text1-image-container">
                <img
                  src={HandCoin}
                  className="landing-intro-text1-image"
                  alt=""
                />
              </div>
            </div>
            <div className="landing-intro-text2">
              Expert Tax Auditing and
              <br /> Business Consulting <br />
              Services in Nigeria.
            </div>
            <div className="landing-intro-get-started">
              <div className="getting-started">Get Started</div>
              <div className="rectangle-between-container">
                <img
                  src={RectangleBetween}
                  className="rectangle-between"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={DoubleArrowRight}
                  className="get-started-arrow"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="landing-intro-coins-container">
            <img className="landing-intro-coins" src={Coins} alt="" />
          </div>
        </div>
        <div className="landing-intro-testimony-container">
          <img className="landing-intro-testimony" src={Testimony} alt="" />
        </div>
      </div>
    );
}