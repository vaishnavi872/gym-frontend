import React from 'react';
import '../styles/Products.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart(product);  // your existing function
        toast.success('Added to cart!');
    };
    return (

        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>

    );
};

export default ProductCard;
