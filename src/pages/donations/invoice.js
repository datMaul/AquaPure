import {React, useState, useEffect} from 'react';
import './invoice.css'; // import your custom CSS file
import { Icon } from '@iconify/react'; // import the Iconify component
import axios from 'axios';

function Invoice() {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/donations/Invoice')
      .then(response => {
        setFullName(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <body className='invBody'>
    <div className="containerV">
      <form action="">
        <div className="rowV">
          <div className="icon">
            <Icon icon="mdi:tick-outline" color="green" />
          </div>
          <div className="colV">
            <div className="headerV">
              <h1 className="titleV">Thanks for your donation!!</h1>
            </div>
          </div>
          <div className="colV">
          <h3>You have completed your payment to charity. Thank you {fullName}.</h3>
          </div>
        </div>
      </form>
    </div>
    </body>
  );
}

export default Invoice;
