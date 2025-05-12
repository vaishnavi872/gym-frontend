import React from 'react';
import '../styles/Footer.css';
import { socialLinks } from '../data/data.jsx';

const Footer = () => {
  const [subscribed, setSubscribed] = React.useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[name="email"]');
    const email = emailInput.value.trim();

    if (!email) {
      emailInput.classList.add('error');
      setSubscribed(false);
    } else {
      emailInput.classList.remove('error');
      setSubscribed(true);
      emailInput.value = ''; // clear input
      setTimeout(() => setSubscribed(false), 3000); // hide message after 3s
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <h2>GET IN TOUCH</h2>
          <ul>
            <p><strong>📞 Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></p>
            <p><strong>📧 Email:</strong> <a href="vaishnavi@gmail.com">vaishnavi@gmail.com</a></p>
            <p><strong>🕒 Hours:</strong> Mon–Sat: 6AM – 9PM</p>
            <div className="footer-socials">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </ul>
        </div>

        <div className="footer-newsletter">
          <div className="logo">FITNESS <span>STUDIO</span></div>
          <p>Your fitness journey starts here. Let's make it unforgettable.</p>
          <p>Subscribe to our newsletter for the latest updates</p>

          {/* Change starts here */}
          <form className="newsletter-form" noValidate onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="example@gmail.com" required />
            <button type="submit">Subscribe</button>
            {subscribed && <p className="success-msg">Thanks for subscribing!</p>}

          </form>
          {/* Change ends here */}

        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 FITNESS STUDIO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;