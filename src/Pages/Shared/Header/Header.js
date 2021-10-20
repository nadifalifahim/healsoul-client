import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const logo = <FontAwesomeIcon icon={faHeartbeat} />;
  const { user, logOut } = useAuth();
  const setUserFirstName = () => {
    if (user.displayName) {
      const userName = user?.displayName;
      const userNameArray = userName.split(" ");
      return userNameArray[0];
    }
  };
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/home">
          <h1 className="logo">
            <span className="logo-icon">{logo} </span>{" "}
            <span className="logo-span-heal">heal</span>
            <span className="logo-span-soul">soul</span>
          </h1>
        </NavLink>
        <div>
          <NavLink to="/home" activeClassName="nav-active">
            Home
          </NavLink>
          <NavLink to="/services" activeClassName="nav-active">
            Services
          </NavLink>
          <NavLink to="/blog" activeClassName="nav-active">
            Blog
          </NavLink>
          <NavLink to="/contact" activeClassName="nav-active">
            Contact
          </NavLink>
        </div>
        <div>
          {console.log(user)}
          {user?.email ? (
            <div className="logged-in-state">
              {user.photoURL && <img src={user.photoURL} alt="User" />}
              {user.displayName && <p>Hello, {setUserFirstName()}</p>}
              <button onClick={logOut}>
                <i className="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div>
              <NavLink to="/login" activeClassName="nav-active">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn-register"
                activeClassName="register-active"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
