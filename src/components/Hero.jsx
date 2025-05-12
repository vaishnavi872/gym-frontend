import React from 'react';
import '../styles/Hero.css';
import gymVideo from '../assets/gym-video.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <video autoPlay loop muted className="background-video">
        <source src={gymVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      <div className="hero-content">
        <h4>WORK HARDER, GET STRONGER</h4>
        <h1>EASY WITH OUR <span>GYM</span></h1>
        <Link to="/membership">
        <button className="become-member-btn">BECOME A MEMBER</button>
      </Link>    
        </div>
    </div>
  );
};

export default Hero;



