import React from "react";
import "./HowItWorks.css";
import image1 from "../../assets/svg/howitworks1.svg";

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-button">
        <div className="how-it-works-title">How It Works</div>
      </div>
      <div className="how-it-works-wrapper">
        <img src={image1} alt="job-seeker" />
      </div>
    </div>
  );
}

export default HowItWorks;
