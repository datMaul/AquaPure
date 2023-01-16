import { Link } from 'react-router-dom';
import './AccountsSettings.css';

export default function AccountsSettings() {
    return (
    <div className='AccountsSettings'>
        <div className='Accounts-Navbar'>
            <li>
                <Link to="/accounts" id='AccountSettings-Link'>Account Settings</Link>
            </li>
            <li>
                <Link to="/accounts/passwordSettings" id='PasswordSettings-Link'>Password Settings</Link>
            </li>
            <li>
                <Link to="/accounts/purchaseHistory" id='PurchaseHistory-Link'>Purchase History</Link>
            </li>       
            <li>
                <Link to="/accounts/loyaltyPoints" id='LoyaltPoints-Link'>Loyalty Points</Link>
            </li>
            <li>
                <Link to="/">Logout</Link>
            </li>
        </div>

        <div className='Accounts-Content'>
            <h2> Account Information </h2>

            <text>Name: </text>
            <p> First Name and Last Name </p>
            <br/> <br/>

            <text>Email: </text>
            <p> Email </p>
            <br/> <br/>

            <text>Phone Number: </text>
            <p> Phone Number </p>
            <br/> <br/>

            <text>Date of Birth: </text>
            <p> Date of Birth </p>
            <br/> <br/>

            <text>Address: </text>
            <p> Address </p>
            <br/> <br/>

            <button> Edit </button>
        </div>

    </div>
    )  
}