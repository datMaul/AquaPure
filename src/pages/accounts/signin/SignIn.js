import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="SignIn">
      <div className="SignIn-Content">
        <h1> Sign In </h1>
        <form>
          <div className="txt_field">
            <input type="email" id="email" name="email" required />
            <span />
            <label for="email"> Email: </label>
          </div>
          <div className="txt_field">
            <input type="password" id="password" name="password" required />
            <span />
            <label for="password"> Password: </label>
          </div>
          <div className="RememberMeBox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label for="rememberMe"> Remember Me </label>
          </div>
          <br /> <br />
          <div className="SignIn-Button-Section">
            <Link to="/">
              {/* This button should check if the required data has inputted */}
              <button type="submit" className="logInButton" id="logInButton">
                {" "}
                Log In{" "}
              </button>
            </Link>
          </div>
          <div className="ForgotPassword-Section">
            <label for="ForgotPassword"> Forgot Password? </label>
            <Link to="/accounts/password/reset"> Click Here to Reset </Link>
          </div>
          <div className="SignUp-Section">
            <label for="SigningUp"> Don't have an account </label>
            <Link to="/accounts/signup"> Sign-Up Here</Link>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

{
  /* <>
  <div className="center">
    <h1>Login</h1>
    <form method="post">
      <div className="txt_field">
        <input type="text" required="" />
        <span />
        <label>Username</label>
      </div>
      <div className="txt_field">
        <input type="password" required="" />
        <span />
        <label>Password</label>
      </div>
      <div className="pass">Forgot Password?</div>
      <input type="submit" defaultValue="Login" />
      <div className="SignUp">
        Not a member? <a href="#">Signup</a>
      </div>
    </form>
  </div>
</>; */
}
