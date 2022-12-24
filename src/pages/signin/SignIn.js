import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='SignIn'>
      <div className='SignIn-Content'>
        <h3> Sign In </h3>
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

            <input type = "submit" value = "Sign In"/>
            <br/> <br/>    

            <Link to = "/ForgotPassword"> Forgot Password? </Link>
            <br/> <br/>

            <label for = "SigningUp"> Don't have an account </label>
            <Link to = "/signup"> Sign Up Here</Link>
          </form>
      </div>
    </div> 
  );
}
