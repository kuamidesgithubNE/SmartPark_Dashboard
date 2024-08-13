// Signup.js

import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <h2 className="title">Smart Park</h2>
      <p className="subtitle">A smarter way to park</p>
      <form action="">
        <input type="text" placeholder="Your Name" className="input" />
        <input
          type="email"
          placeholder="Your email Address"
          className="input"
        />
        <input type="text" placeholder="Phone Number" className="input" />
        <input type="date" placeholder="Date of Birth" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
