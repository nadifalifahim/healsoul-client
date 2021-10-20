import React from "react";
import { Container } from "react-bootstrap";
import GetInTouch from "../GetInTouch/GetInTouch";

const Contact = () => {
  return (
    <Container className="w-50">
      <div className="text-center py-5">
        <h1 className="fw-bold">Contact</h1>
      </div>
      <GetInTouch></GetInTouch>
    </Container>
  );
};

export default Contact;
