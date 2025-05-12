import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Payment.css';

const Payment = () => {
  const location = useLocation();
  const { plan } = location.state || {};

  if (!plan) {
    return <p>No plan selected.</p>;
  }

  return (
    <div className="payment-page">
      <h2>Payment for {plan.title}</h2>
      <p>Price: {plan.price}</p>
      <ul>
        {plan.features.map((feature, idx) => (
          <li key={idx}>✔️ {feature}</li>
        ))}
      </ul>
      <button className="pay-now-btn">Proceed to Pay</button>
    </div>
  );
};

export default Payment;
