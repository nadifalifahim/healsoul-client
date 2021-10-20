import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div className="login-container">
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username or Email"></input>
          <input type="password" placeholder="Password"></input>
          <button>Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="create-an-account-text" to="/register">
            Create an account
          </Link>
        </p>
        <div>
          <button onClick={signInUsingGoogle}>Sign In Using Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
