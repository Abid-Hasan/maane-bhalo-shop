import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name
          .trim()
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
      )
    );
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Shop
                products={products}
                setProducts={setProducts}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
              />
            }
          />
          <Route path="/order-review" element={<OrderReview />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
