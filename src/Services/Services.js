import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <div className="home-services-container">
      <div className="home-services-content">
        <small className="section-heading">OUR SERVICES</small>
        <h2 className="section-title">Managed heathcare services</h2>
        <p className="section-content">
          For things like customer service, medical care, billing, we have made
          commitments to providing an exceptionally comprehensive experience.
        </p>
      </div>
      <div className="home-service-container">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="home-services-content">
        <Link to="/home">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
