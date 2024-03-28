// PaymentForm.js

import React from 'react';
import { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ selectedMethod, onSubmit }) => {
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvv, setCvv] = useState('');

	const [cardNumberError, setCardNumberError] = useState('');
	const [expiryDateError, setExpiryDateError] = useState('');
	const [cvvError, setCvvError] = useState('');

	const [accountNumber, setAccountNumber] = useState('');
	const [bankName, setBankName] = useState('');

	if (!selectedMethod) {
		return <p>Please select a payment method.</p>;
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		setCardNumberError('');
		setExpiryDateError('');
		setCvvError('');

    if (selectedMethod.name === 'Credit Card' && (!cardNumber || !/^\d{16}$/.test(cardNumber))) {
			setCardNumberError('Please enter a valid 16-digit card number.');
			return;
		}

		if (selectedMethod.name === 'Credit Card' && (!expiryDate || !/^(0[1-9]|1[0-2])\/(2[5-9]|[3-9][0-9])$/.test(expiryDate))) {
			setExpiryDateError('Please enter a valid expiry date in MM/YY format.(Above 2024)');
			return;
		}

		if (selectedMethod.name === 'Credit Card' && (!cvv || !/^\d{3}$/.test(cvv))) {
			setCvvError('Please enter a valid 3-digit CVV.');
			return;
		}

		if (selectedMethod.name === 'Bank Transfer' && (!accountNumber || !bankName)) {
			alert("Please enter the details.");
			return;
		}

		onSubmit();
	};

	if (selectedMethod.name === 'Credit Card') {
		return (
			<div>
				<h2>Credit Card Payment</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
					<input type="text" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
					<input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />

					{cardNumberError && <p className="error">{cardNumberError}</p>}
					{expiryDateError && <p className="error">{expiryDateError}</p>}
					{cvvError && <p className="error">{cvvError}</p>}

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}

	if (selectedMethod.name === 'Bank Transfer') {
		return (
			<div>
				<h2>Bank Transfer Payment</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
					<input type="text" placeholder="Bank Name" value={bankName} onChange={(e) => setBankName(e.target.value)} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
};

export default PaymentForm;
