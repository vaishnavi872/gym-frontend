import React from 'react';
import '../styles/Pricing.css';
import { useNavigate } from 'react-router-dom';
import { pricingPlans } from '../data/data.jsx';



const Pricing = () => {
  const navigate = useNavigate();

  const handleJoinNow = (plan) => {
    navigate('/payment', { state: { plan } });
  };

  return (
    <section className="pricing" id="pricing">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && <span className="badge">Most Popular</span>}
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔️ {feature}</li>
              ))}
            </ul>
            <button className="join-btn" onClick={() => handleJoinNow(plan)}>Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
