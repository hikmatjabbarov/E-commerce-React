import React from "react";
import Donut from "../../../assets/donut.png";
import "../../../sass/pages/Home/Banner/banner.scss";

const Banner = () => {
  return (
    <div className=" banner-first">
      <div className="banner-second ">
        <div className="banner-third ">
          <h5 className="summer-text">SUMMER 2020</h5>
          <h1 className="special-text">
            Special Bread
          </h1>
          <p className="text-lighty">
            We know how large objects will act, 
            but things on a small scale.
          </p>
          <button className="btn-shop">
            SHOP NOW
          </button>
        </div>
        <div className="donut">
          <img src={Donut} alt="Donut" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
