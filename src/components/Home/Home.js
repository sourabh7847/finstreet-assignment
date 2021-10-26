import React from "react";

const Home = () => {
  return (
    <div className="auth-wrapper">
      <div>
        <h4
          style={{
            marginBottom: "-1px",
            marginLeft: "13px",
          }}
        >
          what programming language you are looking for a
          job in.
        </h4>
        <input
          className="input"
          placeholder="Enter a language"
        />
        <div>
          <button className="cta-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
