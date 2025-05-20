import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { ProductContext } from "../context/ProductContext.jsx";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate inputs
    if (!formData.name || !formData.price || !formData.description) {
      alert('Please fill out all fields.');
      return;
    }

    // ✅ Add product
    addProduct({ ...formData, price: parseFloat(formData.price) });

    alert("Product added successfully!");
    navigate("/admin/products");
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Price:
          <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} />
        </label>

        <label>
          Description:
          <textarea name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
        </label>

        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
