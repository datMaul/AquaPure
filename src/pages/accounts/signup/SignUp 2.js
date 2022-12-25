import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='SignUp'>
      <div className='SignUp-Content'>
        
        <Link to = "/accounts/login"> Back</Link>

        <h3> Sign Up </h3>
        <br/> <br/>

        <form>
            <label for = "firstName"> First Name: </label>
            <input type = "text" id = "firstName" name = "firstName" placeholder = "First Name" required/>

            <label for = "lastName"> Last Name: </label>
            <input type = "text" id = "lastName" name = "lastName" placeholder = "Last Name" required/>
            <br/> <br/>

            <label for = "email"> Email: </label>
            <input type = "email" id = "email" name = "email" placeholder = "Email" required/>
            <br/> <br/>

            <label for = "phoneNumber"> Phone Number: </label>
            <input type = "text" id = "phoneNumber" name = "phoneNumber" placeholder = "Phone Number" required/>

            <label for = "dateOfBirth"> Date of Birth: </label>
            <input type = "date" id = "dateOfBirth" name = "dateOfBirth" placeholder = "Date of Birth" required/>
            <br/> <br/>

            <label for = "password"> Password: </label>
            <input type = "password" id = "password" name = "password" placeholder = "Password" required/>

            <label for = "confirmPassword"> Confirm Password: </label>
            <input type = "password" id = "confirmPassword" name = "confirmPassword" placeholder = "Confirm Password" required/>
            <br/> <br/>

            <label for = "address"> Address: </label>
            <input type = "text" id = "addressLine1" name = "addressLine1" placeholder = "Address Line 1" required/>
            <br/> <br/>
              
            <input type = "text" id = "addressLine2" name = "addressLine2" placeholder = "Address Line 2" required/>
            <br/> <br/>
              
            <input type = "text" id = "townOrCity" name = "townOrCity" placeholder = "Town / City" required/>
              
            <input type = "text" id = "postcode" name = "postcode" placeholder = "Postcode" required/>
            <br/> <br/>

            <input type = "checkbox" id = "termsAndConditions" name = "termsAndConditions" required/>
            <label for = "termsAndConditions"> I agree to all the Terms & Conditions </label>

            <button type = "submit" className = "signUpButton" id = "signUpButton"> Sign Up </button>
            <br/> <br/>

            <input type = "checkbox" id = "privacyPolicy" name = "privacyPolicy" required/>
            <label for = "privacyPolicy"> I agree to all the Privacy Policy </label>
        </form>  
      </div>
    </div> 
  );
}
