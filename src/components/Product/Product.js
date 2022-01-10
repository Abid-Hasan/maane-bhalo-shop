import React from "react";
import "./Product.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Product = (props) => {
  const { name, seller, img, price, stock, star, starCount } = props.product;
  return (
    <div className="product">
      <div>
        <img className="product-image" src={img} alt="" />
      </div>
      <div className="product-description">
        <h4 className="product-name">{name}</h4>
        <p>Seller: {seller}</p>
        <p>{stock} items left in stock</p>
        <p>
          Rating:{" "}
          <Rating
            readonly
            initialRating={star}
            emptySymbol={
              <FontAwesomeIcon className="rating-star" icon={faStarRegular} />
            }
            fullSymbol={
              <FontAwesomeIcon className="rating-star" icon={faStar} />
            }
          />
        </p>
        <p>
          Price: <strong>${price}</strong>
        </p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="primary-button"
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
