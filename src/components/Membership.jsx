import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Membership.css';
import Layout from './Layout';

const Membership = () => {
  const formRef = useRef();
  const btnRef  = useRef();
  const [status, setStatus] = useState(null);

  const createRipple = e => {
    const btn = btnRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width  = circle.style.height = `${diameter}px`;
    circle.style.left   = `${e.clientX - btn.offsetLeft - radius}px`;
    circle.style.top    = `${e.clientY - btn.offsetTop  - radius}px`;
    circle.classList.add('ripple');

    const existing = btn.getElementsByClassName('ripple')[0];
    if (existing) existing.remove();
    btn.appendChild(circle);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 1) show the ripple immediately
    createRipple(e);

    // 2) after the 600ms ripple animation, send the email
    setTimeout(() => {
      emailjs
        .sendForm(
          'service_ibup2be',     // your Service ID
          'template_xqwr2xu',    // your Template ID
          formRef.current,       // the form ref
          '6t89e1cJhMIZEGBTw'    // your User ID
        )
        .then(
          () => {
            setStatus('SUCCESS');
            formRef.current.reset();
          },
          err => {
            console.error('EmailJS error:', err);
            setStatus('ERROR');
          }
        );
    }, 600);
  };

  return (
    <Layout>
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <div className="membership-container">
          <h1>Join Our Fitness Studio</h1>
          <p>Fill out the form to become a member.</p>

          <form
            ref={formRef}
            className="membership-form"
            onSubmit={handleSubmit}
          >
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                required
              />
            </label>

            <label>
              Email Address:
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </label>

            <label>
              Phone Number:
              <div style={{ display: 'flex', gap: '10px' }}>
                <select name="countryCode" required>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+61">🇦🇺 +61</option>
                  {/* …other codes… */}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </label>

            <label>
              Choose Plan:
              <select name="plan" required>
                <option value="Monthly">Monthly – ₹2525.50</option>
                <option value="Quarterly">Quarterly – ₹6736.06</option>
                <option value="Yearly">Yearly – ₹9999.50</option>
              </select>
            </label>

            <button ref={btnRef} type="submit">
              {status === 'SUCCESS' ? 'Thank you for joining!' : 'Submit'}
            </button>
          </form>

          {status === 'SUCCESS' && (
            <p className="success-msg">Thanks for joining! Check your inbox.</p>
          )}
          {status === 'ERROR' && (
            <p className="error-msg">
              Oops—something went wrong. Try again later.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Membership;
