import React from "react";
import aboutImg from "../../Images/About/1.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={aboutImg} alt="About" />
      </div>
      <div className="about-content">
        <small className="section-heading">INTRODUCING</small>
        <h1 className="section-title">
          Tackle the challenge of delivering health care
        </h1>
        <br />
        <p className="section-content">
          We offer reasonable pricing health care plans, insurance packages to
          clients.
        </p>
        <br />
        <p className="section-content">
          HealSoul Health Services provide patients with choices to ask for the
          conducting and analyzing of several lab tests on-site at no cost for
          prioritized patients or at 70% for people with an insurance.
        </p>
      </div>
    </div>
  );
};

export default About;
