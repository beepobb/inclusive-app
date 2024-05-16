import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
            <input type="text"/>
        </div>
        <div className="input">
            <input type="email"/>
        </div>
        <div className="input">
            <input type="password"/>
        </div>
      </div>
      <div className="forgot-password">Forgot password?<span>Click Here!</span></div>
      <div className="submit-containter">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default Login;
