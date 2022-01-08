import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const handleSearch = (event) => {
    setFilteredProducts(products.filter(product => product.name.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())));
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <main>
        <Shop products={products} setProducts={setProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      </main>
    </>
  );
}

export default App;
