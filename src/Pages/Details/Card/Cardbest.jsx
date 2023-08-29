import React from "react";
import "../../../sass/pages/Details/card/cardbest.scss";

const Cardbest = ({ src, title, price, discount, subtitle }) => {
  return (
    <div className="card">
      <div className="card-pic">
        <img src={src} alt="product" />
      </div>
      <div className="product-content">
        <h5 className="title">{title}</h5>
        <h4 className="subtitle">{subtitle}</h4>
        <div className="price-product">
          <p className="price">{price}</p>
          <p className="discount">{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardbest;
