import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <div className='ResetPassword'>
      <div className='ResetPassword-Content'>
        <Link to = "/accounts/password/reset"> Back</Link>

        <h3> Enter New Password </h3>
        <br/> <br/>

        <form>
            <label for = "newPassword"> New Password: </label>
            <input type = "password" id = "newPassword" name = "newPassword" placeholder = "New Password" required/>

            <label for = "confirmNewPassword"> Confirm New Password: </label>
            <input type = "password" id = "confirmNewPassword" name = "confirmNewPassword" placeholder = "Confirm New Password" required/>
            <br/> <br/>

            <button type = "submit" className = "searchButton" id = "searchButton"> Reset 
            <Link to = "/"/> 
            </button>
            <br/> <br/>
        </form> 
      </div>
    </div> 
  );
}