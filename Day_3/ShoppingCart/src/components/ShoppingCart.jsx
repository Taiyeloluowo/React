import React, { useState } from "react";
import "../App.css";

const ShoppingCart = () => {
  // Initial cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Jollof Rice", price: 1500, quantity: 2 },
    { id: 2, name: "Plantain", price: 500, quantity: 1 },
    { id: 3, name: "Egusi Soup", price: 2000, quantity: 1 },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">
                ₦{item.price.toLocaleString()} x {item.quantity} = ₦
                {(item.price * item.quantity).toLocaleString()}
              </span>
              <div className="item-buttons">
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <h3 className="total">Total: ₦{totalPrice.toLocaleString()}</h3>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;