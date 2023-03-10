import React from 'react';
import './form.css';
import './donationFormLink.js';
import { Link } from "react-router-dom";

const data = {
    charity: 'name',
    phone_no: 'something',
    first_name: 'something',
    last_name: 'yeat',
    email: 'address',
    postcode: 'yea',
    address_user: 'skrr'
};

fetch('/api/donationData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error));

fetch('/api/data?id=#&name=John')
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error));

export default function DonationForm() {
    return (
        <div class="whole">
            <div class="from-box login">
                <h2>Billing Address</h2>
                <form>
                    {/* <div>
                        <label htmlFor="title">Title:</label><br />
                        <select id="title" name="title">
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option> 
                            <option value="Doctor">Doctor</option>
                            <option value="Other">Other</option>
                        </select><br />
                    </div> */}
                    <div>
                        <label htmlFor="firstname">Full Name:</label><br />
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onInput={(e) =>
                                (e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                            }
                        /><br />
                    </div>
                    {/* <div>
                        <label htmlFor="surname">Surname:</label><br />
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            onInput={(e) =>
                                (e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                            }
                        /><br />
                    </div> */}
                    <div class="input-box">
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" pattern="[^@]+@[^@]+" /><br />
                    </div>
                    <div class="input-box">
                        <label htmlFor="phone">Phone Number:</label><br />
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            pattern="0[0-9]{10}"
                            maxLength="11"
                        /><br />
                    </div>
                    <div  class="input-box">
                        <label htmlFor="address">Address:</label><br />
                        <input type="text" id="address" name="address" /><br />
                    </div>
                    <div  class="input-box">
                        <label htmlFor="county">County:</label><br />
                        <input type="text" id="county" name="county" /><br />
                    </div>
                    <div  class="input-box">
                        <label htmlFor="postcode">Post Code:</label><br />
                        <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
                        /><br />
                    </div> 
                    <div class="remember-forgot">
                        <label><input type="checkbox"></input>Remember Me</label>
                    </div>
                    <div  class="btn">
                        <input type="submit" value="Submit" />
                    </div> 
                    <div class="login-register">
                        <p>Dont have an account? <a
                        href="#"
                        class="register-link">Register </a></p>
                    </div>             
                </form>
            </div>

            <div class="from-box register">
                <h2>Card Details</h2>
                <form>
                    {/* <div>
                        <label htmlFor="title">Title:</label><br />
                        <select id="title" name="title">
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option> 
                            <option value="Doctor">Doctor</option>
                            <option value="Other">Other</option>
                        </select><br />
                    </div> */}
                    <div>
                        <label htmlFor="firstname">Name of the Card:</label><br />
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onInput={(e) =>
                                (e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                            }
                        /><br />
                    </div>
                    {/* <div>
                        <label htmlFor="surname">Surname:</label><br />
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            onInput={(e) =>
                                (e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                            }
                        /><br />
                    </div> */}
                    <div class="input-box">
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" pattern="[^@]+@[^@]+" /><br />
                    </div>
                    <div class="input-box">
                        <label htmlFor="card-numnber">Card Number:</label><br />
                        <input
                            type="text"
                            id="card-numnber"
                            name="card-numnber"
                            pattern="0[0-9]{10}"
                            maxLength="16"
                        /><br />
                    </div>
                    <div  class="input-box">
                        <label htmlFor="expiry-month">Expiry Month:</label><br />
                        <input type="text" id="expiry-month" name="expiry-month" /><br />
                    </div>
                    <div  class="input-box">
                        <label htmlFor="county">Expiry years:</label><br />
                        <select id="expiry-years" name="expiry-years">
                            <option value="2023">Mr</option>
                            <option value="2024">Mrs</option>
                            <option value="2025">Ms</option>
                            <option value="2026">Miss</option> 
                            <option value="2027">Doctor</option>
                            <option value="2028">Other</option>
                        </select><br />
                    </div>
                    <div  class="input-box">
                        <label htmlFor="postcode">CVV</label><br />
                        <input type="text" id="CVV" name="CVV" />
                        <br />
                    </div> 

                    <div class="remember-forgot">
                        <label><input type="checkbox"></input>Remember Me</label>
                    </div>
                    <div  class="btn">
                        <input type="submit" value="Submit" />
                    </div>     
                    <div class="login-register">
                        <p>Dont have an account? <a
                        href="/signin/SignIn"
                        class="login-link">login </a></p>
                    </div>          
                </form>
            </div>     
        </div>
    );
}
