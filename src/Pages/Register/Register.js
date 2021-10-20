import React from "react";
import { useState } from "react/cjs/react.development";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
  const { registerUsingEmailandPassword } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    registerUsingEmailandPassword(name, email, password);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>
        <input
          onBlur={handleNameChange}
          type="text"
          required
          placeholder="Enter your name"
        ></input>
        <input
          onBlur={handleEmailChange}
          type="email"
          required
          placeholder="Enter your email"
        ></input>
        <input
          type="password"
          required
          placeholder="Enter your password"
          onBlur={handlePasswordChange}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
