import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import ContactPage from './components/ContactPage';
import BackToTopButton from './components/Layout';
import LoginPopup from './components/LoginPopup';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

import ReviewForm from './components/Reviews/ReviewForm';
import ReviewList from './components/Reviews/ReviewList';
import './components/Reviews/Review.css'; // Optional: only if you use external styles

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      
      <section id="home">
        <Hero isBlurred={showLogin} />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="Testimonials">
        <Testimonials />
      </section>

      <section id="team">
        <Team />
      </section>

      {/* ✅ Reviews Section */}
      <section id="reviews" style={{ padding: "40px 20px", background: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Reviews</h2>
        <ReviewForm onAddReview={handleAddReview} />
        <ReviewList reviews={reviews} />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <BackToTopButton />
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default HomePage;
