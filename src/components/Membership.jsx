import React from 'react';
import '../styles/Membership.css';
import Layout from './Layout';

const Membership = () => {
  return (
    <Layout>
    <div style={{ padding: '50px', textAlign: 'center' }}>
    <div className="membership-container">
      <h1>Join Our Fitness Studio</h1>
      <p>Fill out the form to become a member.</p>
      <form className="membership-form">
        <label>
          Full Name:
          <input type="text" placeholder="Enter your full name" />
        </label>
        <label>
  Email Address:
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title="Please enter a valid email address"
  />
</label>

        <label>
  Phone Number:
  <div style={{ display: 'flex', gap: '10px' }}>
  <select name="countryCode" required>
  <option value="+91">🇮🇳 +91 </option>
  <option value="+1">🇺🇸 +1 </option>
 
  <option value="+61">🇦🇺 +61 </option>
  <option value="+81">🇯🇵 +81 </option>

  <option value="+33">🇫🇷 +33 </option>
  <option value="+39">🇮🇹 +39 </option>
  <option value="+34">🇪🇸 +34 </option>

  <option value="+7">🇷🇺 +7 </option>
  <option value="+86">🇨🇳 +86 </option>
  <option value="+27">🇿🇦 +27 </option>
  <option value="+55">🇧🇷 +55 </option>


  
</select>

    <input type="tel" name="phone" placeholder="Enter your phone number" required />
  </div>
</label>

        <label>
          Choose Plan:
          <select>
            <option value="monthly">Monthly - ₹ 2525.50</option>
            <option value="quarterly">Quarterly - ₹ 6736.06</option>
            <option value="yearly">Yearly - ₹ 9999.50</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </Layout>
  );
};

export default Membership;
