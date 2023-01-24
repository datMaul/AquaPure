import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css';

export default function SignIn() {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/login', { email: user, password: pwd })
      .then(res => {
        //Sign In success
        localStorage.setItem('token', res.data.token);
        window.location = '/';
        console.log("Ladies and Gentlemen, we got'em!");
        console.log(res.data.token);
      })
      .catch(err => {
        //Sign In error
        //setErrMsg(err.response.data.message);
        setErrMsg("Wrong Inputs");
        console.log("Error Chief!!!");
      });
  }

  return (
    // ...
    <form onSubmit={handleSubmit}>
      <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <label htmlFor="email"> Email: </label>
      <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setUser(e.target.value)} value={user} required />
      <br /> <br />
      <label htmlFor="password"> Password: </label>
      <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
      <br /> <br />
      <input type="checkbox" id="rememberMe" name="rememberMe" />
      <label htmlFor="rememberMe"> Remember Me </label>
      <button type="submit" className="logInButton" id="logInButton"> Log In </button>
    </form>
    // ...
  );
}