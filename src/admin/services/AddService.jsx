import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddService.css';

const AddService = () => {
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!service.name.trim()) newErrors.name = 'Name is required';
    if (!service.description.trim()) newErrors.description = 'Description is required';
    if (!service.price) newErrors.price = 'Price is required';
    if (!service.duration.trim()) newErrors.duration = 'Duration is required';
    if (!service.image.trim()) newErrors.image = 'Image URL is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const newService = {
        ...service,
        id: Date.now().toString()
      };

      const saved = JSON.parse(localStorage.getItem('services')) || [];
      localStorage.setItem('services', JSON.stringify([...saved, newService]));

      navigate('/admin/services');
    }
  };

  return (
    <div className="add-service">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit} className="service-form">
        <div>
          <label>Name</label>
          <input name="name" value={service.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Description</label>
          <textarea name="description" value={service.description} onChange={handleChange} />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label>Price ($)</label>
          <input name="price" type="number" value={service.price} onChange={handleChange} />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <label>Duration</label>
          <input name="duration" value={service.duration} onChange={handleChange} />
          {errors.duration && <p className="error">{errors.duration}</p>}
        </div>

        <div>
          <label>Image URL</label>
          <input name="image" value={service.image} onChange={handleChange} />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
