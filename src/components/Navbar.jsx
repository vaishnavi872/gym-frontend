import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';
import LoginPopup from './Loginpopup';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return; // Run only on homepage

      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.includes(current)) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">FITNESS <span>STUDIO</span></div>
        <ul className="nav-links">
          <li><HashLink smooth to="/#home">HOME</HashLink></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/classes">CLASSES</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/our-blog">OUR BLOG</Link></li>
          <li><HashLink smooth to="/#contact">CONTACT</HashLink></li>
          <li>
            <button className="login-btn" onClick={() => setShowLogin(true)}>SIGN IN</button>
          </li>
        </ul>
      </nav>

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {showSignup && <LoginPopup onClose={() => setShowSignup(false)} showSignup />}
    </>
  );
}

export default Navbar;
