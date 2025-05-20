import React from 'react';
// src/pages/Products.jsx
import { products } from '../data/data'; // ✅ Correct


import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
