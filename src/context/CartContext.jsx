// CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems(items => {
      // see if it’s already in the cart
      const idx = items.findIndex(i => i.id === product.id);
      if (idx > -1) {
        // clone & increment quantity
        const newItems = [...items];
        newItems[idx] = {
          ...newItems[idx],
          quantity: newItems[idx].quantity + 1
        };
        return newItems;
      } else {
        // first time: add with quantity = 1
        return [...items, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(product) {
    setCartItems(items =>
      items.filter(i => i.id !== product.id)
    );
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
