import { Link } from 'react-router-dom';
import './LoyaltyPoints.css';

export default function LoyaltyPoints() {
    return (
    <div className='LoyaltyPoints'>
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

        <div className='LoyaltyPoints-Content'>
            <h2> Loyalty Points </h2>

            <text>Loyalty Points: </text>
            <p> Points </p>
        </div>

    </div>
    )  
}