import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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

  useEffect(() => {
    if (products.length) {
      const cartFromDB = getStoredCart();
      const cartProducts = [];
      for (const key in cartFromDB) {
        const product = products.find((product) => product.key === key);
        if (product) {
          const quantity = cartFromDB[key];
          product.quantity = quantity;
          cartProducts.push(product);
        }
      }
      setCart(cartProducts);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const existingProduct = cart.find((pr) => pr.key === product.key);
    if (existingProduct) {
      const rest = cart.filter((pr) => pr.key !== product.key);
      existingProduct.quantity += 1;
      newCart = [...rest, existingProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    // save to UI
    setCart(newCart);

    // save to local storage
    addToDb(product.key);
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
