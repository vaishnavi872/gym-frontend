import React, { useState } from 'react';
import '../styles/Services.css';
import Modal from '../components/Modal';
import Layout from '../components/Layout';
 
import { servicesData } from '../data/data.jsx';


const Services = ({ onJoinClick }) => {
  const [selectedService, setSelectedService] = useState(null);


  const handleMoreClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };
  
 
  

return (
  <>
  <Layout>
    <section className="services-section" id="services">
      <div className="services-header">
        <h5>WHAT WE OFFER</h5>
        <h2>OUR SERVICES</h2>
      </div>

      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>
              <span
                className="details-link"
                onClick={() => handleMoreClick(service)}
                style={{
                  color: '#f15b2a',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                {service.short}
              </span>
            </p>
          </div>
        ))}
        
      </div>

      {selectedService && (
        <Modal
          title={selectedService.title}
          description={selectedService.description}
          rating={selectedService.rating}
          reviews={selectedService.reviews}
          onClose={closeModal}
 
        />
      )}
      
    </section>
  </Layout>
  </>
);
};

export default Services;