import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
  return (
    <><meta charSet="utf-8" /><link rel="stylesheet" href="SignIn.css" /><div className="center">
      <body className="body1">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required="" />
          <span />
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required="" />
          <span />
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" defaultValue="SignIn" />
        <div className="SignUp">
          Not a member? <Link to="./pages/accounts/signup/SignUp"> Signup</Link>
        </div>
      </form>
      </body>
    </div></>
  );
}