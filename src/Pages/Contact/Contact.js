import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <h1 className="section-title">Get in touch</h1>
        <p className="section-content">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        <div className="contact-input-container-primary">
          <input type="text" placeholder="Your Name"></input>
          <input type="text" placeholder="Your Email"></input>
        </div>
        <div className="contact-input-container-secondary">
          <input
            type="text"
            placeholder="Subject"
            className="w-100 mb-4"
          ></input>
          <textarea type="text" placeholder="Subject"></textarea>
        </div>
      </div>
      <button className="red-button">Send Message</button>
    </div>
  );
};

export default Contact;
