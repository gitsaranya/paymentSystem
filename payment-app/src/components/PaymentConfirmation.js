// PaymentConfirmation.js

import React from 'react';

const PaymentConfirmation = ({ selectedMethod }) => {
	return (
		<div className="PaymentConfirmation">
		<h2>Payment Confirmation</h2>
		<p>Payment was done through {selectedMethod.name}. Thank you!</p>
		<button onClick={() => window.location.href='/'}>Back</button>
		</div>
		);
};

export default PaymentConfirmation;