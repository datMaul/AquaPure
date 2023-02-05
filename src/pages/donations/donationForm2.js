import './form.css';
import React from 'react';


function DonationForm() {
    return (
        <div className="Middle">
            <form id="form1" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <h3>Make a Donation</h3>
                <h1>Soil Association</h1>
                <p>Your support is greatly appreciated!</p>
                <label htmlFor="amount">Enter Donation Amount:</label><br />
                <input type="text" id="amount" name="amount" value="50.00" /><br />
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="CaptainMatta11@gmail.com" />
                <input type="hidden" name="item_name" value="Donation" />
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="hidden" name="return" value="http://www.your-website.com/thank-you" />
                <input type="hidden" name="cancel_return" value="http://www.your-website.com/cancel" />
                <input type="image" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="PayPal - The safer, easier way to pay online" />
            </form>
        </div>
    );
}

export default DonationForm;