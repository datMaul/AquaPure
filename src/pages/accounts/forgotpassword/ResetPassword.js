import { Link } from 'react-router-dom';
import './ResetPassword.css';

export default function ResetPassword() {
  return (
    <div className='ResetPassword'>
      <div className='ResetPassword-Content'>
        <Link to = "/accounts/password/reset">
          <button className = "backButton"> Back </button>
        </Link>

        <h1> Enter New Password </h1>
        <br/> <br/>

        <form>
            <label for = "newPassword"> New Password: </label>
            <input type = "password" id = "newPassword" name = "newPassword" placeholder = "New Password" required/>
            <br/> <br/>

            <label for = "confirmNewPassword"> Confirm New Password: </label>
            <input type = "password" id = "confirmNewPassword" name = "confirmNewPassword" placeholder = "Confirm New Password" required/>
            <br/> <br/>

            <Link to = "/">
              {/* This button should check if the required data has inputted */}
              <button type = "submit" className = "searchButton" id = "searchButton"> Reset </button>
            </Link>
            <br/> <br/>
        </form> 
      </div>
    </div> 
  );
}