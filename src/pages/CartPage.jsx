// CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotal = () =>
    cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="item-details">
                  <div className="cell name">{item.name}</div>
                  <div className="cell price">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="cell qty">
                    Qty: {item.quantity}
                  </div>
                  <div className="cell action">
                    <button onClick={() => removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            Total: ₹{getTotal()}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
