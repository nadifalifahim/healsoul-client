import React, { useEffect, useState } from "react";
import Service from "../../../Services/Service";
import "./HomeServices.css";

const HomeServices = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <div className="home-services-container">
      <div className="home-services-content">
        <small>OUR SERVICES</small>
        <h2>Managed heathcare services</h2>
        <p>
          For things like customer service, medical care, billing, we have made
          commitments to providing an exceptionally comprehensive experience.
        </p>
      </div>
      <div className="home-service-container">
        {serviceData.slice(0, 6).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="home-services-content">
        <button>Explore all services</button>
      </div>
    </div>
  );
};

export default HomeServices;
