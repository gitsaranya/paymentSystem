// App.js

import React, { useState } from 'react';
import PaymentMethodMenu from './components/PaymentMethodMenu';
import PaymentForm from './components/PaymentForm';
import PaymentConfirmation from './components/PaymentConfirmation';
import './App.css';

const App = () => {
	const [selectedMethod, setSelectedMethod] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const paymentMethods = [
	{ id: 1, name: 'Credit Card', logo: 'cc.png' },
	{ id: 2, name: 'Bank Transfer', logo: 'bb.png' },
	{ id: 3, name: 'Google Pay', logo: 'gp.png' },
	];

	const handleSelect = (method) => {
		setSelectedMethod(method);
	};

	const handleFormSubmit = () => {
		setIsSubmitted(true);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>Payment Methods</h2>
			</header>
			<main className="App-main">
				{!isSubmitted ? (
					<>
						<PaymentMethodMenu paymentMethods={paymentMethods} onSelect={handleSelect} />
						{selectedMethod && <p>Selected Payment Method: {selectedMethod.name}</p>}
						{selectedMethod && (
						<PaymentForm key={selectedMethod.id} selectedMethod={selectedMethod} onSubmit={handleFormSubmit} />
						)}		
					</>
						) : (
					<PaymentConfirmation selectedMethod={selectedMethod} />
				)}
			</main>
		</div>
	);
};

export default App;