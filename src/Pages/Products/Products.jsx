import React from "react";
import Card from "./Card";
import "../../sass/pages/Products/products.scss";
import Featured from "./featured";

const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="products">
          <div className="title-products">
            <p className="p1">Featured Products</p>
            <p className="p2">BESTSELLER PRODUCTS</p>
            <p className="p3">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <button className="btn-load">LOAD MORE PRODUCTS</button>
          </div>
        </div>

        <Featured />
      </div>
    </div>
  );
};

export default Products;
