import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Signin = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h4>Sign In</h4>
        <input className="input" placeholder="email" />
        <input className="input" placeholder="password" />
        <div className="cta">
          <button className="cta-btn">Signin</button>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
