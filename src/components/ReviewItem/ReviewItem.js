import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, img, key } = props.product;
  return (
    <div className="product">
      {/* <div>
        <img className="product-image" src={img} alt="" />
      </div> */}
      <div>
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button
          onClick={() => props.handleRemove(key)}
          className="primary-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
