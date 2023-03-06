import React from 'react';
import './form.css';

function DonationPage() {
  return (
    <div>
      <form>
        <h1>Aqua Pure Donation Page</h1>
        <label htmlFor="title">Title:</label><br />
        <select id="title" name="title">
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Doctor">Doctor</option>
          <option value="Other">Other</option>
        </select><br />
        <label htmlFor="firstname">First Name:</label><br />
        <input
          type="text"
          id="firstname"
          name="firstname"
          onInput={(e) =>
            (e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
          }
        /><br />
        <label htmlFor="surname">Surname:</label><br />
        <input
          type="text"
          id="surname"
          name="surname"
          onInput={(e) =>
            (e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
          }
        /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" pattern="[^@]+@[^@]+" /><br />
        <label htmlFor="phone">Phone Number:</label><br />
        <input
          type="text"
          id="phone"
          name="phone"
          pattern="0[0-9]{10}"
          maxLength="11"
        /><br />
        <label htmlFor="address">Address:</label><br />
        <input type="text" id="address" name="address" /><br />
        <label htmlFor="county">County:</label><br />
        <input type="text" id="county" name="county" /><br />
        <label htmlFor="postcode">Post Code:</label><br />
        <input
          type="text"
          id="postcode"
          name="postcode"
          onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
        /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
