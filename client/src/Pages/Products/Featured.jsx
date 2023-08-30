import React from "react";
import "../../sass/pages/Products/featured.scss";
import Featured1 from "../../assets/featured1.jpg";
import Featured2 from "../../assets/featured2.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="img-wrappers">
        <img src={Featured1} alt="Featured1" />
        <img src={Featured2} alt="Featured2" />
      </div>
      <div className="featext">
        <h1 className="subtitle">Featured Products</h1>
        <h6 className="title">We love what we do</h6>
        <div className="text">
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
