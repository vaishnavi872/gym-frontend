import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './context/ProductContext';
import './ProductManagement.css'; // Import the CSS file

const ProductManagement = () => {
  const { products, deleteProduct } = useContext(ProductContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="product-heading">Product Management</h2>
      <Link to="/admin/products/add">
        <button className="btn-add">Add New Product</button>
      </Link>

      <table border="2" cellPadding="100" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.toFixed(2)}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/admin/products/edit/${product.id}`}>
                    <button className="btn-small btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn-small btn-delete"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
