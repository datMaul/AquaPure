import { Link } from 'react-router-dom';
import './PurchaseHistory.css';

export default function PurchaseHistory() {
    return (
    <div className='PurchaseHistory'>
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

        <div className='PurchaseHistory-Content'>
            <h2> Purchase History </h2>

            <text>Purchase History: </text>
            <p> History </p>
        </div>

    </div>
    )
}