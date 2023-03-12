import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";


export default function SignIn() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { email: user, password: pwd })
      .then((res) => {
        //Sign In success
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_ID", res.data.userId);
        localStorage.setItem("accountType", res.data.accountType);
        localStorage.setItem("email", user);

        if (res.data.accountType === "Admin") {
          window.location = "/admin";
        } else if (res.data.accountType === "User") {
          window.location = '/';
        }

        console.log("User ID: " + localStorage.getItem("user_ID"));
        console.log("Account Type: " + res.data.accountType);
        console.log(res.data);
        console.log(res.data.message);
        console.log("Ladies and Gentlemen, we got'em!");
        console.log(res.data.token);
      })
      .catch((err) => {
        //Sign In error
        //setErrMsg(err.response.data.message);
        alert("Please check your email and password and try again!");
        console.log("Error Chief!!!");
      });
  }

  return (
    <div className="SignIn">
      <div className="SignIn-Form-Content">
        <h1> Sign In </h1>
        <br /> <br />
        <form onSubmit={handleSubmit}>
          <div className="Container-SignIn-Form">
            <p
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <input
              type="email"
              className="input-text"
              id="emailInput"
              name="eMail"
              placeholder="Email"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br /> <br />
            <input
              type="password"
              id="passwordInput"
              className="input-text"
              name="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <br /> <br />
            {/* <div className="Container-RememberUser">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe"> Remember Me </label>
              <br /> <br />
            </div> */}
            <button type="submit" id="submitButton">
              Log In
            </button>
          </div>
          <br /> <br />
          {/* <div className="Container-ForgotPassword">
            <label for="ForgotPassword"> Forgot Password? </label>
            <Link to="/accounts/password/reset"> Click Here to Reset </Link>
            <br />
          </div> */}
          <div className="Container-SignUp">
            <label for="SigningUp"> Don't have an account </label>
            <Link to="/accounts/signup"> Sign Up Here</Link>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}