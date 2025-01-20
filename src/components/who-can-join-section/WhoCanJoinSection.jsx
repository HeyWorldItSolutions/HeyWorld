import React from "react";
import "./WhoCanJoinSection.css";
import logo1 from "../../assets/svg/skillsicon1.svg";
import logo2 from "../../assets/svg/skillsicon2.svg";
import logo3 from "../../assets/svg/skillsicon3.svg";
import logo4 from "../../assets/svg/skillsicon4.svg";

function WhoCanJoinSection() {
  return (
    <div className="wcj-container">
      <div style={{ width: "50%" }}>
        <p className="wcj-title">WHO CAN JOIN</p>
        <h2 className="wcj-main-title">Skill Development Schemes For All</h2>
        <div className="who-can-join-content-wrapper">
          <div className="who-can-join-content-section">
            <div style={{ display: "flex" }}>
              <p className="wcj-card-number">01</p>
              <img src={logo1} alt="Logo" />
            </div>
            <p className="wcj-card-desc">Colleges/Universities</p>
          </div>
          <div className="who-can-join-content-section">
            <div style={{ display: "flex" }}>
              <p className="wcj-card-number">02</p>
              <img src={logo2} alt="Logo" />
            </div>
            <p className="wcj-card-desc">Individuals/Working Professionals</p>
          </div>
          <div className="who-can-join-content-section">
            <div style={{ display: "flex" }}>
              <p className="wcj-card-number">03</p>
              <img src={logo3} alt="Logo" />
            </div>
            <p className="wcj-card-desc">Startups</p>
          </div>
          <div className="who-can-join-content-section">
            <div style={{ display: "flex" }}>
              <p className="wcj-card-number">04</p>
              <img src={logo4} alt="Logo" />
            </div>
            <p className="wcj-card-desc">Corporates</p>
          </div>
        </div>
      </div>
      <div className="wcj-image-container">
        <img
          src="./whocanjoinimg.png"
          alt="who-can-join"
          width={500}
          height={480}
        />
      </div>
    </div>
  );
}

export default WhoCanJoinSection;
