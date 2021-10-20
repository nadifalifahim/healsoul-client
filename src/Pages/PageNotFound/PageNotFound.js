import React from "react";
import "./PageNotFound.css";
import errorimage from "./error.png";
import { Link } from "react-router-dom";

// Page not found component
const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div>
        <img src={errorimage} alt="" />
        <h1>Page Not Found!</h1>
        <h5>Please try searching for some other page</h5>
        <Link to="/home">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
