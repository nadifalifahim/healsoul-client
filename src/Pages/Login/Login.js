import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setIsLoading, setUser } = useFirebase();

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
          <button onClick={handleGoogleSignIn}>Sign In Using Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
