import "./Product.css";

import React from "react";

const Product = (props) => {
  const { name, seller, img, price, star, starCount } = props.product;
  return (
    <div className="product">
      <div>
        <img className="product-image" src={img} alt="" />
      </div>
      <div className="product-description">
        <h4 className="product-name">{name}</h4>
        <p>Seller: {seller}</p>
        <p>
          Price: <strong>${price}</strong>
        </p>
        <button className="primary-button">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
