import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className='ForgotPassword'>
      <div className='ForgotPassword-Content'>
        
        <Link to = "/accounts/login"> Back</Link>

        <h3> Forgot Password </h3>
        <br/> <br/>

        <form>
          <label for = "email"> Email: </label>
          <input type = "email" id = "email" name = "email" placeholder = "Email" required/>
          <br/> <br/>

          <button type = "submit" className = "searchButton" id = "searchButton" onClick={<Link to = "/accounts/password/reset/confirm"/>}> Search </button>
          <br/> <br/>
        </form> 
      </div>
    </div> 
  );
}
