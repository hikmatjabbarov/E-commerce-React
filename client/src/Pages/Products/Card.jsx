import React from "react";
import img5 from "../../assets/product.jpg";
import "../../sass/pages/Products/card.scss";

const Card = () => {
  return (
    <div className="product-detail">
      <img src={img5} alt="img5" />
      <h1>Round Rye</h1>
      <p>Ciabatta</p>
      <div className="product-price">
        <p className="firtp">$16.48</p>
        <p className="secondp">$6.48</p>
      </div>
    </div>
  );
};

export default Card;
