import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username or Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link className="create-an-account-text">Create an account</Link>
      </p>
      <div></div>
    </div>
  );
};

export default Login;
