import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
  return (
    <><meta charSet="utf-8" /><link rel="stylesheet" href="SignIn.css" />
    <body className='body1'>
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
        <div className="SignIn">
          Not a member? <Link href="SignUp.css">Signup</Link>
        </div>
      </form>
    </div>
    </body>
    </>
  );
}
