import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/YogaTraining.css';
import SignupPopup from '../components/SignupPopup';
import { Link } from 'react-router-dom';


const YogaTraining = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <Layout>
      <div className="yoga-container">
        <h1>Yoga Training Program</h1>
        <p>Balance your body and mind with our expert-led sessions.</p>

        <button className="join-now-btn" onClick={() => setShowPopup(true)}>Join Now</button>
        {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}

        {/* Schedule Section */}
        <section className="yoga-schedule">
          <h2>Weekly Yoga Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Session</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Monday</td><td>Hatha Yoga</td><td>6:00 AM - 7:00 AM</td></tr>
              <tr><td>Tuesday</td><td>Power Yoga</td><td>6:00 AM - 7:00 AM</td></tr>
              <tr><td>Wednesday</td><td>Meditation</td><td>7:00 AM - 8:00 AM</td></tr>
              <tr><td>Thursday</td><td>Restorative Yoga</td><td>6:00 AM - 7:00 AM</td></tr>
              <tr><td>Friday</td><td>Ashtanga Yoga</td><td>6:00 AM - 7:00 AM</td></tr>
            </tbody>
          </table>
        </section>

        {/* Benefits Section */}
        <section className="yoga-benefits">
          <h2>Benefits of Yoga</h2>
          <ul>
            <li>🧘 Reduces stress and anxiety</li>
            <li>💤 Improves sleep quality</li>
            <li>💪 Enhances flexibility and strength</li>
            <li>🫀 Boosts heart health</li>
          </ul>
        </section>

        {/* Trainer Section */}
        <section className="trainer-section">
          <h2>Meet Our Trainer</h2>
          <img src="/images/trainer.jpg" alt="Trainer" />
          <p>Priya Sharma, Certified Yoga Therapist with 10+ years in holistic wellness and mindfulness coaching.</p>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Members Say</h2>
          <div className="testimonial">
            <p>"This yoga program has improved my posture, reduced my anxiety, and helped me sleep better."</p>
            <span>- Meera K.</span>
          </div>
          <div className="testimonial">
            <p>"Amazing experience! The instructor really guides you at every level."</p>
            <span>- Rohit S.</span>
          </div>
        </section>

        {/* FAQ */}


        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          {[
            {
              question: "Do I need previous yoga experience?",
              answer: "No! Our sessions are beginner-friendly with expert guidance."
            },
            {
              question: "What should I bring to class?",
              answer: "A yoga mat, water bottle, and comfortable clothes are recommended."
            },
            {
              question: "Can I join online?",
              answer: "Yes, we offer both in-studio and online live sessions."
            }
          ].map((faq, index) => (
            <div className={`faq-item ${activeFAQ === index ? 'active' : ''}`} key={index}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
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

export default YogaTraining;
