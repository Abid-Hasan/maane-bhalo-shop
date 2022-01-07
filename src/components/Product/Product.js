import "./Product.css";

import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <h4>{props.product.name}</h4>
    </div>
  );
};

export default Product;
