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
      <div className='SignUp-Form-Content'>

        <Link to="/accounts/login">
          <button className="backButton" id = "backButton"> Back </button>
        </Link>
        <br /> <br />

        <div className='Container-SignUp-Form'>
          <form onSubmit={submitForm}>
            <input type="text" id="firstNameInput" name="firstName" placeholder="First Name" required />
            <input type="text" id="lastNameInput" name="lastName" placeholder="Last Name" required />
            <br /> <br />

            <input type="email" id="emailInput" name="email" placeholder="Email" required />
            <br /> <br />

            <input type="text" id="areaCodeInput" name="areaCode" placeholder="Area Code" required />
            <input type="text" id="phoneNumberInput" name="phoneNumber" placeholder="Phone Number" required />
            <input type="date" id="dateOfBirthInput" name="dateOfBirth" placeholder="Date of Birth" required />
            <br /> <br />

            <input type="password" id="passwordInput" name="password" placeholder="Password" required />
            <input type="password" id="confirmPasswordInput" name="confirmPassword" placeholder="Confirm Password" required />
            <br /> <br />

            <input type="text" id="addressLine1Input" name="addressLine1" placeholder="Address Line 1" required />
            <br /> <br />

            <input type="text" id="addressLine2Input" name="addressLine2" placeholder="Address Line 2" required />
            <br /> <br />

            <input type="text" id="townOrCityInput" name="townOrCity" placeholder="Town / City" required />
            <input type="text" id="postcodeInput" name="postcode" placeholder="Postcode" required />
            <br /> <br />

            <input type="checkbox" id="termsAndConditionsInput" name="termsAndConditions" required />
            <label for="termsAndConditions" id="termsAndConditionsLabel"> I agree to all the Terms & Conditions </label>
            <br /> <br />

            <input type="checkbox" id="privacyPolicyInput" name="privacyPolicy" required />
            <label for="privacyPolicy" id="privacyPolicyLabel"> I agree to all the Privacy Policy </label>
            <br /> <br />

            <button type="submit" id="submitButton"> Sign Up </button>
          </form>
        </div>
      </div>

      <div className='SignUp-Info'>
        <div className='SignUp-Info-Content'>
          <h1>Sign Up</h1>
          <h2>Welcome to AquaPure</h2>
        </div>
      </div>
    </div>
  );
}