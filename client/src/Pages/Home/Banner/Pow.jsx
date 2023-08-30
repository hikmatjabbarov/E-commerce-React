import React from "react";
import "../../../sass/pages/Home/Banner/pow.scss";
import img1 from "../../../assets/IMG1.png";
import img2 from "../../../assets/IMG2.png";
import img3 from "../../../assets/IMG3.png";

const Pow = () => {
  return (
    <div className="pow-main container">
      <div className="pow1">
        <img  src={img1} alt="img1" />
        <div className="pow-desc">
        
        <p className="pone"> Top Product Of the Week</p>
          <button>EXPLORE ITEMS</button>
        </div>
      </div>
      <div className="pow2">
        <div className="pow-parent">
          <img src={img2} alt="" />
          <div className="pow-desc">
        <p> Top Product Of the Week</p>
          <button>EXPLORE ITEMS</button>
        </div>
        </div>
        <div className="pow-parent">
          <img src={img3} alt="" />
          <div className="pow-desc">
        <p> Top Product Of the Week</p>
          <button>EXPLORE ITEMS</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pow;
