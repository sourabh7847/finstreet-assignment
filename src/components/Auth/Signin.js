import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signin } from "../redux/actions/auth.action";
import "./styles.css";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (localStorage.getItem("accessToken"))
    history.push("/");

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h4>Sign In</h4>
        <input
          className="input"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="cta">
          <button
            className="cta-btn"
            onClick={() =>
              dispatch(signin(email, password))
            }
          >
            Signin
          </button>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
