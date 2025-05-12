import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import gymImage from '../assets/gym-girl.jpg';

import Layout from '../components/Layout'; // Make sure Layout is correctly imported
import { featureDetails } from '../data/data.jsx';



const About = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openPopup = (key) => {
    setPopup(featureDetails[key]);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <Layout>
      <section className="about-us-section">
        <div className="about-left">
          <img src={gymImage} alt="gym-girl" className="about-img" />
        </div>

        <div className="about-right">
          <h3>ABOUT US</h3>
          <h2>WHAT WE HAVE DONE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua...
          </p>

          <div className="skill">
            <div className="label">
              <span>Body building</span>
              <span>80%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="label">
              <span>Training</span>
              <span>85%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="label">
              <span>Fitness</span>
              <span>75%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Features Section */}
      <section className="about-section" id="about">
        <div className="about-header" data-aos="fade-up">
          <h3>WHY CHOOSE US?</h3>
          <h2>PUSH YOUR LIMITS FORWARD</h2>
        </div>

        <div className="about-features">
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="100" onClick={() => openPopup('equipment')}>
            <i className="fas fa-dumbbell"></i>
            <h4>Modern equipment</h4>
            <p>Click to learn more about our advanced fitness gear.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="200" onClick={() => openPopup('nutrition')}>
            <i className="fas fa-apple-alt"></i>
            <h4>Healthy nutrition plan</h4>
            <p>Click to learn more about custom meal plans.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="300" onClick={() => openPopup('training')}>
            <i className="fas fa-user-friends"></i>
            <h4>Professional training plan</h4>
            <p>Click to learn about expert-designed plans.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="400" onClick={() => openPopup('custom')}>
            <i className="fas fa-heartbeat"></i>
            <h4>Unique to your needs</h4>
            <p>Click to learn about personal plans.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="500" onClick={() => openPopup('yoga')}>
            <i className="fas fa-spa"></i>
            <h4>Yoga Training</h4>
            <p>Click to learn about our yoga sessions.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="600" onClick={() => openPopup('cardio')}>
            <i className="fas fa-running"></i>
            <h4>Cardio Training</h4>
            <p>Click to learn about heart-pumping workouts.</p>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <img src={popup.image} alt={popup.title} className="popup-img" />
            <h2>{popup.title}</h2>
            <p>{popup.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default About;
