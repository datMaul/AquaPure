import "./signin.css";
//import "./SignUp.css" - also add "SignUp.css" to href on 26

export default function SignIn() {
  return (
    <>
  <meta charSet="utf-8" />
  <link rel="stylesheet" href="signin.css" />
  <body className="bodyS">
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
        Not a member? <a href="#">Signup</a> 
      </div> 
    </form>
  </div>
  </body>
</>
  );
  
  //return <h1>Sign In</h1>;
}
