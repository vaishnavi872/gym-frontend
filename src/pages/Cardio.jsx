import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SignupPopup from '../components/SignupPopup';
import '../styles/Cardio.css';
import { Link } from 'react-router-dom';


const Cardio = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Layout>
      <div className="cardio-container">
        {/* Hero Image */}
        <img src="/images/cardio-banner.jpg" alt="Cardio Training" className="cardio-banner" />

        {/* Intro Section */}
        <section className="cardio-intro">
          <h2>Cardio Training</h2>
          <p>
            Boost endurance and cardiovascular health with dynamic cardio sessions for all levels.
          </p>
          <button className="join-now-btn" onClick={() => setShowPopup(true)}>Join Now</button>
        </section>

        {/* Popup */}
        {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}

        {/* Benefits Section */}
        <section className="cardio-benefits">
          <h3>Why Choose Cardio?</h3>
          <ul>
            <li>🔥 Burn calories and fat</li>
            <li>💓 Improve heart health</li>
            <li>⚡ Boost stamina and energy</li>
            <li>😌 Reduce stress and improve mood</li>
          </ul>
        </section>

        {/* Schedule Section */}
        <section className="cardio-schedule-section">
          <h3>Weekly Cardio Schedule</h3>
          <table className="cardio-schedule">
            <thead>
              <tr>
                <th>Day</th>
                <th>Session</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Monday</td><td>HIIT Blast</td></tr>
              <tr><td>Wednesday</td><td>Endurance Run</td></tr>
              <tr><td>Friday</td><td>Cardio Dance</td></tr>
            </tbody>
          </table>
        </section>

        {/* Testimonials Section */}
        <section className="cardio-testimonials">
          <h3>Client Results</h3>
          <div className="testimonial-card">
            <p>"My stamina has skyrocketed! I can run longer and feel amazing."</p>
            <span>- Ananya S.</span>
          </div>
          <div className="testimonial-card">
            <p>"The cardio dance class is so fun — it doesn't even feel like a workout!"</p>
            <span>- Ravi T.</span>
          </div>
        </section>
        <section className="back-button-section" style={{ marginTop: '40px' }}>
  <Link to="/classes">
    <button style={{
      backgroundColor: '#e60000',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer'
    }}>
      ← Back to Classes
    </button>
  </Link>
</section>

      </div>
    </Layout>
  );
};

export default Cardio;
