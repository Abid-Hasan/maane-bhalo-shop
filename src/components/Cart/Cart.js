import "./Cart.css";

import React from "react";

const Cart = ({ cart }) => {
  let total = cart.reduce((total, current) => total + current.price, 0);
  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <h5>Items Ordered: {cart.length}</h5>
      <h5>Total: {total.toFixed(2)}</h5>
      <button className="primary-button">Order Review</button>
    </div>
  );
};

export default Cart;
