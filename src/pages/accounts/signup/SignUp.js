import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();

  function submitForm(form) {
    form.preventDefault(); // Prevents AutoSubmitting

    const firstName = form.target.firstName.value;
    const lastName = form.target.lastName.value;
    const email = form.target.email.value;
    const areaCode = form.target.areaCode.value;
    const phoneNumber = form.target.phoneNumber.value;
    const dateOfBirth = form.target.dateOfBirth.value;
    const password = form.target.password.value;
    const confirmPassword = form.target.confirmPassword.value;
    const addressLine1 = form.target.addressLine1.value;
    const addressLine2 = form.target.addressLine2.value;
    const townOrCity = form.target.townOrCity.value;
    const postcode = form.target.postcode.value;
    const termsAndConditions = form.target.termsAndConditions.value;
    const privacyPolicy = form.target.privacyPolicy.value;

    // const areaCodeRegex = /(?:\+?(\d{1,3}))?/;
    // const phoneNumberRegex = /(\d{3})(\d{3})(\d{4})(?: *x(\d+))?/;

    // if () {
    //   alert("Invalid Area Code!");
    //   return;
    // } else if () {
    //   alert("Invalid Phone Number!");
    //   return;
    // } else if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // } else {
    //   console.log("Full Name: " + firstName + " " + lastName);
    //   console.log("Email: " + email);
    //   console.log("Phone Number: " +areaCode + phoneNumber);
    //   console.log("Date of Birth: " + dateOfBirth);
    //   console.log("Password: " + password);
    //   console.log("Address Line 1: " + addressLine1);
    //   console.log("Address Line 2: " + addressLine2);
    //   console.log("Town or City: " + townOrCity);
    //   console.log("Postcode: " + postcode);
    //   console.log("Terms and Conditions: " + termsAndConditions);
    //   console.log("Privacy Policy: " + privacyPolicy);

    //   navigate('/');
    // }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
      console.log("Full Name: " + firstName + " " + lastName);
      console.log("Email: " + email);
      console.log("Phone Number: " +areaCode + phoneNumber);
      console.log("Date of Birth: " + dateOfBirth);
      console.log("Password: " + password);
      console.log("Address Line 1: " + addressLine1);
      console.log("Address Line 2: " + addressLine2);
      console.log("Town or City: " + townOrCity);
      console.log("Postcode: " + postcode);
      console.log("Terms and Conditions: " + termsAndConditions);
      console.log("Privacy Policy: " + privacyPolicy);

      navigate('/');
    }
    
  }

  return (
    <div className='SignUp'>
      <div className='SignUp-Content'>

        <Link to="/accounts/login"> Back</Link>

        <h1> Sign Up </h1>
        <br /> <br />

        <form onSubmit={submitForm}>
          <label for="firstName"> First Name: </label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" required />

          <label for="lastName"> Last Name: </label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
          <br /> <br />

          <label for="email"> Email: </label>
          <input type="email" id="email" name="email" placeholder="Email" required />
          <br /> <br />

          <label for="phoneNumber"> Phone Number: </label>
          <input type="text" id="areaCode" name="areaCode" placeholder="Area Code" required />
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />

          <label for="dateOfBirth"> Date of Birth: </label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="Date of Birth" required />
          <br /> <br />

          <label for="password"> Password: </label>
          <input type="password" id="password" name="password" placeholder="Password" required />

          <label for="confirmPassword"> Confirm Password: </label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
          <br /> <br />

          <label for="address"> Address: </label>
          <input type="text" id="addressLine1" name="addressLine1" placeholder="Address Line 1" required />
          <br /> <br />

          <input type="text" id="addressLine2" name="addressLine2" placeholder="Address Line 2" required />
          <br /> <br />

          <input type="text" id="townOrCity" name="townOrCity" placeholder="Town / City" required />

          <input type="text" id="postcode" name="postcode" placeholder="Postcode" required />
          <br /> <br />

          <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required />
          <label for="termsAndConditions"> I agree to all the Terms & Conditions </label>

          <button type="submit" className="signUpButton" id="signUpButton"> Sign Up </button>
          <br /> <br />

          <input type="checkbox" id="privacyPolicy" name="privacyPolicy" required />
          <label for="privacyPolicy"> I agree to all the Privacy Policy </label>
        </form>
      </div>
    </div>
  );
}
