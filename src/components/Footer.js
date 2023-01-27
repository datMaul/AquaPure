import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer">
            <div>
                <p>All rights reserved. © 2022 AquaPure.</p>
            </div>
            <div>
                <ul>
                    <li><Link to="accounts/signup/privacypolicy">Privacy</Link></li>
                    <li><a>|</a></li>
                    <li><Link to="accounts/signup/termsandconditions">Terms</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}