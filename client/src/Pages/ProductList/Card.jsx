import React from "react";
import "../../sass/pages/ProductList/card.scss";

const Card = ({ src, title, subtitle, variant }) => {
  const cardStyle = {
    backgroundColor: variant === "yellow" ? "#edd99c" : "#dbebf8",
  };
  return (
    <div style={cardStyle} className="cardpro">
      <div className="card-img">
        <img src={src} alt="" />
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <h1>{subtitle}</h1>
        <p>Explore Items</p>
      </div>
    </div>
  );
};

export default Card;
