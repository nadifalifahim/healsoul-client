import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>© 2021 HealSoul</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
