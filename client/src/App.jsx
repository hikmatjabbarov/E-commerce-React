import React from "react";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details/Details";
import Signup from "./Pages/Authorization/Signup";
import Login from "./Pages/Authorization/Login";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Team from "./Pages/Team/Team";
import Article from "./Pages/Article/Article";
import FAQ from "./Pages/Article/FAQ";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/shop" element={<Details />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog/content" element={<Article />} />
        <Route path="/contact/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
};

export default App;
