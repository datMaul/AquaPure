import React from 'react';
import './invoice.css'; // import your custom CSS file
import { Icon } from '@iconify/react'; // import the Iconify component

function Invoice() {
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
            <h3 className="titleV">You have completed your payment to charity. Thank you Shashwat Gurung.</h3>
          </div>
        </div>
      </form>
    </div>
    </body>
  );
}

export default Invoice;
