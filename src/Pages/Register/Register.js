import React from "react";

const Register = () => {
  return (
    <div>
      <form>
        <input type="email" required placeholder="Enter your email"></input>
        <input
          type="password"
          required
          placeholder="Enter your password"
        ></input>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
