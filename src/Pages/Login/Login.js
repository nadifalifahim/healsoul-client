import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setIsLoading, setUser, signInUsingEmail } =
    useFirebase();

  const location = useLocation();
  const history = useHistory();
  const locationURL = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(locationURL);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailSignIn = (e) => {
    signInUsingEmail(email, password);
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleEmailSignIn}>
          <input
            type="text"
            placeholder="Username or Email"
            onBlur={handleEmailChange}
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            onBlur={handlePasswordChange}
            required
          ></input>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="create-an-account-text" to="/register">
            Create an account
          </Link>
        </p>
        <div>
          <button onClick={handleGoogleSignIn}>Sign In Using Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
