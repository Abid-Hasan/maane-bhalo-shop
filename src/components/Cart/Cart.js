import "./Cart.css";

import React from "react";

const Cart = ({ cart }) => {
  // let total = cart.reduce((total, current) => total + current.price, 0);

  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((product) => {
    if (!product.quantity) product.quantity = 1;
    totalQuantity += product.quantity;
    totalPrice += product.quantity * product.price;
  });

  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <h5>Items Ordered: {totalQuantity}</h5>
      <h5>Total: {totalPrice.toFixed(2)}</h5>
      <button className="primary-button">Order Review</button>
    </div>
  );
};

export default Cart;
