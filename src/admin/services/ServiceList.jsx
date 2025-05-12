import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  // Load services from localStorage
  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    setServices(storedServices);
  }, []);

  // Delete service and update localStorage
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(service => service.id !== id);
      setServices(updatedServices);
      localStorage.setItem('services', JSON.stringify(updatedServices));
    }
  };

  return (
    <div className="service-list">
      <div className="header">
        <h2>Services</h2>
        <Link to="/admin/services/add">
          <button className="add-btn">Add New Service</button>
        </Link>
      </div>

      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <div className="service-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p className="desc">{service.description}</p>
              <p className="info">${service.price} - {service.duration}</p>
              <div className="actions">
                <Link to={`/admin/services/edit/${service.id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(service.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;
