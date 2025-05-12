import React from "react";
import "./../styles/Testimonials.css";
import { testimonials } from '../data/data.jsx';



export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Members Say</h2>
        <p className="section-subtitle">Hear from our happy community</p>
        
        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <div className="card-header">
                <img src={t.image} alt={t.name} className="member-photo" />
                <div className="member-info">
                  <h3>{t.name}</h3>
                  <span className="member-role">{t.role}</span>
                </div>
              </div>
              <p className="testimonial-text">"{t.feedback}"</p>
              <div className="rating">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}