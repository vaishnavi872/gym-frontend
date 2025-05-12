// components/SignupPopup.js
import React from 'react';
import '../styles/SignupPopup.css';

const SignupPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;
