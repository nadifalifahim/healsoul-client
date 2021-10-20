import React from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceID } = useParams();
  return (
    <div>
      <p>This is service details: {serviceID}</p>
    </div>
  );
};

export default ServiceDetails;
