import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h2 className="title">Smart Park</h2>
      <p className="subtitle">A smarter way to park</p>
      <form action="">
        <input
          placeholder="Your email Address"
          value="name"
          className="input"
        />
        <input placeholder="password" value="password" className="input" />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
