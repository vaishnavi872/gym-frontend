import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';      // Adjust the path as needed
import Footer from './Footer';      // Adjust the path as needed
import '../styles/BackToTop.css';   // Back to Top button styles

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <button
        className={`back-to-top ${visible ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
};

export default Layout;
