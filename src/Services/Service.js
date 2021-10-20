import React from "react";
import "./Service.css";
import { sentenceCase } from "sentence-case";

const Service = (props) => {
  let { id, title, thumbnail, description } = props.service;
  title = sentenceCase(title);
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={thumbnail} alt={title}></img>
      </div>
      <h2>{title}</h2>
      <p>{description.slice(0, 150)} . . .</p>
      <button>
        More Details on {title} <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Service;
