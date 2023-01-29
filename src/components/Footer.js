import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div>
          <p>All rights reserved. © 2022 AquaPure.</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="mailto:aquapure.customerservice@gmail.com">Contact Us</a>
            </li>
            <li>
              <a>|</a>
            </li>
            <li>
              <Link to="/termsAndConditions">Terms & Conditions</Link>
            </li>
            <li>
              <a>|</a>
            </li>
            <li>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
