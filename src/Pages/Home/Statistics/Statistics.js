import React from "react";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-content">
          <h2>
            97<span className="statistics-small">%</span>
          </h2>
          <p>Percent of users recommend us to friends and family</p>
        </div>
        <div className="statistics-content">
          <h2>
            350<span className="statistics-small">+</span>
          </h2>
          <p>Companies have partnered with using us recently</p>
        </div>
        <div className="statistics-content">
          <h2>
            16<span className="statistics-small">x</span>
          </h2>
          <p>Customers have been served across the country.</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
