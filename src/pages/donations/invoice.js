import React from 'react';
import './invoice.css'; // import your custom CSS file
import { Icon } from '@iconify/react'; // import the Iconify component

function Invoice() {
  return (
    <body className='invBody'>
    <div className="container">
      <form action="">
        <div className="row">
          <div className="icon">
            <Icon icon="mdi:tick-outline" color="green" />
          </div>
          <div className="col">
            <div className="header">
              <h1 className="title">Thanks for your donation!!</h1>
            </div>
          </div>
          <div className="col">
            <h3 className="title">You have completed your payment to charity. Thank you Shashwat Gurung.</h3>
          </div>
        </div>
      </form>
    </div>
    </body>
  );
}

export default Invoice;
