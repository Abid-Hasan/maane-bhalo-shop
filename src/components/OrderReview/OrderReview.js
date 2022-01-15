import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate("/place-order");

    // remove from ui
    setCart([]);

    //remove from db
    clearTheCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="primary-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
