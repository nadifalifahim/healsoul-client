import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./ServiceDetails.css";

// Service Details Page
const ServiceDetails = () => {
  const { serviceID } = useParams();
  const [currentService, setCurrentService] = useState({});

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => handleServiceData(data));
  }, []);

  const handleServiceData = (data) => {
    data.forEach((item) => {
      if (item.id === parseInt(serviceID)) {
        setCurrentService(item);
      }
    });
  };

  return (
    <div className="service-details-container">
      <div className="service-details-image-container">
        <img src={currentService.thumbnail} alt={currentService.title} />
      </div>
      <div className="service-details-content">
        <small className="section-heading">SERVICE DETAILS</small>
        <h1 className="section-title">{currentService.title}</h1>
        <p className="section-content ">{currentService.description}</p>

        <Link to="/home">
          <button className="red-button">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
