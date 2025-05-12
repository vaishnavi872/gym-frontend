import React, { useState, useRef } from 'react';
import '../styles/ContactPage.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false, subject: false, message: false });
  const form = useRef();
  // State to manage which accordion item is active
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSending, setIsSending] = useState(false);

  // Handle accordion toggle
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const newErrors = {
      name: !name,
      email: !email,
      subject: !subject,
      message: !message,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).includes(true)) {
      alert('Please fill in all fields');
      return;
    }

    setIsSending(true); // ⏳ Start spinner

    emailjs.send(
      'service_ibup2be',
      'template_xqwr2xu',
      {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message,
      },
      '6t89e1cJhMIZEGBTw'
    ).then(
      () => {
        setSuccessMessage('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSending(false); // ✅ Done sending
        setTimeout(() => setSuccessMessage(''), 4000);
      },
      (error) => {
        console.log(error.text);
        alert('❌ Failed to send message. Please try again later.');
        setIsSending(false); // ❌ Stop spinner on failure
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="map-container">
          <iframe
            title="Fitness studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4118.02205937424!2d73.0176162120396!3d20.762399932728577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0edb434424895%3A0x37917bd8daeb9df3!2sChocolate%20Heaven%20Building%20Chikli%2C%20301-310%2C%20Bilimora%20-%20Chikhli%20Rd%2C%20Nandarkha%2C%20Bilimora%2C%20Gujarat%20396325!5e0!3m2!1sen!2sin!4v1745319730306!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form-container">
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={errors.name ? 'error' : ''}
              />
              <input
                type="email"
                placeholder="Your Email*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={errors.email ? 'error' : ''}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className={errors.subject ? 'error' : ''}
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={errors.message ? 'error' : ''}
            ></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? <span className="spinner"></span> : 'SEND MESSAGE'}
            </button>

          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>

        {/* FAQ Accordion */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-button" onClick={() => toggleAccordion(0)}>
                Do you offer personal training?
              </button>
              {activeIndex === 0 && (
                <div className="accordion-content">
                  <p>Yes, we offer one-on-one personal training</p>
                  <p>sessions tailored to your fitness goals.</p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button className="accordion-button" onClick={() => toggleAccordion(1)}>
                Are there trial sessions?
              </button>
              {activeIndex === 1 && (
                <div className="accordion-content">
                  <p>Yes, we offer a free trial session for members</p>
                  <p>to experience our facilities and classes.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
