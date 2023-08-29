import React from "react";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details/Details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/shop" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
