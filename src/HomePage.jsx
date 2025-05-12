import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';



import Team from './components/Team';

import ContactPage from './components/ContactPage';
import BackToTopButton from './components/Layout';
import LoginPopup from './components/LoginPopup';

import Testimonials from './components/Testimonials';

import Pricing from './components/Pricing';

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      <section id="home"><Hero isBlurred={showLogin} /></section>
  
      <section id="pricing"><Pricing /></section>
  
      <section id="Testimonials"><Testimonials /></section>

      <section id="team"><Team /></section>
     

     
      <section id="contact"><ContactPage /></section>
      <BackToTopButton />
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default HomePage;
