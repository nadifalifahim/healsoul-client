import React from "react";
import "./Banner.css";
import img1 from "../../../Images/Banner/1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <img src={img1} alt="banner" />
        <div className="banner-content">
          <h1>Encounter the aging time</h1>
          <div className="underline-red"></div>
          <h2>Time can't be resisted, but aging can</h2>
          <br />
          <Link to="/services">
            <button>Find a caregiver</button>
          </Link>
        </div>
      </div>
      <div className="benefits-container">
        <div className="benefits-content">
          <i className="fas fa-dumbbell"></i>
          <div>
            <h2>Psychology Therapy</h2>
            <p>
              Psychotherapy is to spend time with a trained therapist to help
              diagnose the problems.
            </p>
          </div>
        </div>
        <div className="benefits-content">
          <i className="fas fa-heartbeat"></i>
          <div>
            <h2>Restoring Confidence</h2>
            <p>
              We can learn to rebuild and sustain confidence through its natural
              ebbs and flow.
            </p>
          </div>
        </div>
        <div className="benefits-content">
          <i className="far fa-clock"></i>
          <div>
            <h2>Work Improvements</h2>
            <p>
              Improve the productivity and performance improvement systems that
              are time-consuming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
