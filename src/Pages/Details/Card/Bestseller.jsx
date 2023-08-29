import React from "react";
import Cardbest from "./Cardbest";
import Product1 from "../../../assets/singleimg.png";
import "../../../sass/pages/Details/card/bestseller.scss";
import Partner from "../../Home/Banner/Partner";

const Bestseller = () => {
  return (
    <div className="main-best">
      <div className="titlebestseller">
        <h1>BESTSELLER PRODUCTS</h1>
      </div>
      <div className="bestseller">
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
        <Cardbest
          src={Product1}
          title="Bun Messes"
          price="$16.48"
          discount="$6.48"
          subtitle="Sourdough"
        />
      </div>
      <Partner />
    </div>
  );
};

export default Bestseller;
