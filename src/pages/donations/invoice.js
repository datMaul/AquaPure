import React from 'react';
import './invoice.css'; // import your custom CSS file
import { Icon } from '@iconify/react'; // import the Iconify component

function Invoice() {
  return (
    <body className='invBody'>
    <div className="containerInv">
      <form action="">
        <div className="rowInv">
          <div className="iconInv">
            <Icon icon="mdi:tick-outline" color="green" />
          </div>
          <div className="colInv">
            <div className="headerInv">
              <h1 className="titleInv">Thanks for your donation!!</h1>
            </div>
          </div>
          <div className="colInv">
            <h3 className="titleInv">You have completed your payment to charity. Thank you Shashwat Gurung.</h3>
          </div>
        </div>
      </form>
    </div>
    </body>
  );
}

export default Invoice;
