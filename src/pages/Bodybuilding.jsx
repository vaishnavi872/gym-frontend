import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import '../styles/Bodybuilding.css';
import { Link } from 'react-router-dom';


import SignupPopup from '../components/SignupPopup';


const Bodybuilding = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  
 
  
  return (
    <Layout>
      <div style={{ padding: '140px', textAlign: 'center' }}>
        <h2>Bodybuilding Program</h2>
        <p>Welcome to our strength-focused training program!</p>
        <section className="program-details">
          <h3>Program Overview</h3>

          <ul>
            <li>🏋️‍♂️ 6-day strength and hypertrophy training</li>
            <li>🧠 Science-based progressive overload approach</li>
            <li>🥗 Personalized nutrition guidelines</li>
            <li>📅 Weekly split: Upper/Lower Body Focus</li>
          </ul>
        </section>


        <section className="schedule-table-section">
          <h3>Weekly Schedule</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Workout</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Monday</td><td>Chest & Triceps</td><td>8:00 AM - 9:00 AM</td></tr>
              <tr><td>Tuesday</td><td>Back & Biceps</td><td>7:00 AM - 8:00 AM</td></tr>
              <tr><td>Wednesday</td><td>Legs</td><td>8:00 AM - 9:00 AM</td></tr>
              <tr><td>Thursday</td><td>Shoulders</td><td>8:00 AM - 9:00 AM</td></tr>
              <tr><td>Friday</td><td>Arms & Core</td><td>6:00 AM - 7:00 AM</td></tr>
              <tr><td>Saturday</td><td>Full Body Functional</td><td>7:00 AM - 8:00 AM</td></tr>
            </tbody>
          </table>
        </section>

        <section className="testimonials">
          <h3>What Our Clients Say</h3>
          <div className="testimonial-card">
            <p>"I've gained muscle and confidence! The trainers are amazing and the schedule is easy to follow."</p>
            <span>- Priya R.</span>
          </div>
          <div className="testimonial-card">
            <p>"This program changed my life. The structure and diet support helped me lose fat and build strength."</p>
            <span>- Arjun M.</span>
          </div>
        </section>
        <section className="cta-section">
          <h3>Ready to Transform Your Body?</h3>
          <button className="join-now-btn" onClick={() => setShowPopup(true)}>Join Now</button>
        </section>
        {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}

        <section className="faq-section">
  <h3>Frequently Asked Questions</h3>

  {[
    {
      question: 'Do I need gym access?',
      answer: 'Yes, most workouts use standard gym equipment. However, some modifications can be made for home workouts.',
    },
    {
      question: 'Is this suitable for beginners?',
      answer: 'Absolutely. We include beginner, intermediate, and advanced variations.',
    },
    {
      question: 'Is a meal plan included?',
      answer: 'Yes, you’ll receive a sample nutrition plan tailored for muscle gain.',
    },
  ].map((faq, index) => (
    <div key={index} className="faq-item">
      <button
        className="faq-question"
        onClick={() => toggleFAQ(index)}
      >
        {faq.question}
      </button>
      <div className={`faq-answer ${activeFAQ === index ? 'active' : ''}`}>
        {faq.answer}
      </div>
    </div>
  ))}
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

export default Bodybuilding;
