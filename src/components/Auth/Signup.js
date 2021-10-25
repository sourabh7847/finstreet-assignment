import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        
          <h4>Sign Up</h4>
        <input className="input" placeholder="name" />
        <input className="input" placeholder="email" />
        <input className="input" placeholder="password" />
        <div className="cta">
          <button className="cta-btn">Signup</button>
          <Link to="signin">
            <p>Signin</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
