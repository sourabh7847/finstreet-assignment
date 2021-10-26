import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../redux/actions/auth.action";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (localStorage.getItem("accessToken"))
    history.push("/");

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h4>Sign Up</h4>
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
            onClick={() => {
              dispatch(signup(email, password)).then(() =>
                history.push("/signin")
              );
            }}
          >
            Signup
          </button>
          <Link to="signin">
            <p>Signin</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
