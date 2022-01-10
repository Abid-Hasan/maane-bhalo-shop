import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
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

  return [cart, setCart];
};

export default useCart;
