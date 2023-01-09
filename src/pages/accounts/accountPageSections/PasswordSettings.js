import { Link } from 'react-router-dom';
import './PasswordSettings.css';

export default function PasswordSettings() {
    return (
    <div className='PasswordSettings'>
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

        <div className='PasswordSettings-Content'>
            <h2> Password Settings </h2>
            
            <text>Password: </text> 
            <p> Password (*************) </p>
            <button> Show Password </button>
            <br/> <br/>

            <button> Edit </button>
        </div>

    </div>
    )  
}