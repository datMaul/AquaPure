import { Link } from 'react-router-dom';
import './ForgotPassword.css'

export default function ForgotPassword() {
  return (
    <div className='ForgotPassword'>
      <div className='ForgotPassword-Content'>
        
        <Link to = "/accounts/login"> Back</Link>

        <h1> Forgot Password </h1>
        <br/> <br/>

        <form>
          <label for = "email"> Email: </label>
          <input type = "email" id = "email" name = "email" placeholder = "Email" required/>
          <br/> <br/>

          <Link to = "/accounts/password/reset/confirm">
            {/* This button should check if the required data has inputted */}
            <button type = "submit" className = "searchButton" id = "searchButton" > Search </button>
          </Link>
          <br/> <br/>
        </form> 
      </div>
    </div> 
  );
}