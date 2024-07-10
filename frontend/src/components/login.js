import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logIn from '../contracts/login.js';
import './login.css';


export default function SignIn({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await logIn({
      email,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
};