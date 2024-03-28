// PaymentMethodMenu.js

import React from 'react';
import './PaymentMethodMenu.css';

const PaymentMethodMenu = ({ paymentMethods, onSelect }) => {
 return (
    <div className="payment-methods-container">
      <h2>Select Payment Method</h2>
      <ul className="payment-methods-list">
        {paymentMethods.map((method, index) => (
          <li key={index} onClick={() => onSelect(method)}>
            <div className="payment-method-item">
              <img src={`/images/${method.logo}`} alt={method.name} className="payment-method-logo" />
              {method.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default PaymentMethodMenu;
