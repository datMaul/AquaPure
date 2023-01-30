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
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required="" />
          <span />
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" defaultValue="SignIn" />
        <div className="SignIn">
          Not a member? <Link to="/accounts/signup">Signup</Link>
        </div>
      </form>
    </div>
    </body>
    </>
  );
}

class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validationSubmit();
  }

  validationSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) == false) {
          error++;
        }
      });
      if (error == 0) {
        localStorage.setItem("auth", 1);

        this.form.submit();
      }
    })
  }
}

class Authenticate {
  constructor(){
    document.querySelector("body").style.display = "none";
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);

  }

  validateAuth(auth) {
    if (auth != 1) {
      window.location.replace("/");
    }else {
      document.querySelector("body").style.display = "block";
    }
  }

  logOut() {
    localStorage.removeItem("auth");
    window.location.replace("/");

  }
}