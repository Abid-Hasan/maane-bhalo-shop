import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = ({
  products,
  setProducts,
  filteredProducts,
  setFilteredProducts,
}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {filteredProducts.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
