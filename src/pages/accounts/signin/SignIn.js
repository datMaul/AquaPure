import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
  return (
    <div className='SignIn'>
      <div className='SignIn-Content'>
        <h1> Sign In </h1>
        <br/> <br/>
        
          <form>
            <label for = "email"> Email: </label>
            <input type = "email" id = "email" name = "email" placeholder = "Email" required/>
            <br/> <br/>

            <label for = "password"> Password: </label>
            <input type = "password" id = "password" name = "password" placeholder = "Password" required/>
            <br/> <br/>

            <input type = "checkbox" id = "rememberMe" name = "rememberMe"/>
            <label for = "rememberMe"> Remember Me </label>

            <Link to = "/">
              {/* This button should check if the required data has inputted */}
              <button type = "submit" className = "logInButton" id = "logInButton"> Log In </button>
            </Link>
            <br/> <br/>

            <Link to = "/accounts/password/reset"> Forgot Password? </Link>
            <br/> <br/>

            <label for = "SigningUp"> Don't have an account </label>
            <Link to = "/accounts/signup"> Sign Up Here</Link>
          </form>
      </div>
    </div> 
  );
}
