import React from "react";
import Card from "./Card";
import '../../../sass/pages/Home/Service/service.scss'
import Service1 from "../../../assets/service1.svg"
import Service2 from "../../../assets/service2.svg"
import Service3 from "../../../assets/service3.svg"
const Service = () => {
  return (
    <div className="service">
      <div className="title-products">
        <p className="p1">Featured Products</p>
        <p className="p2">BESTSELLER PRODUCTS</p>
        <p className="p3">Problems trying to resolve the conflict between </p>
      </div>
      <div className="service-cards">
        <Card src={Service1} title='Easy Wins' text='Get your best looking smile now!'/>
        <Card src={Service2} title='Concrete' text='Defalcate is most focused in helping you discover your most beautiful smile'/>
        <Card src={Service3} title='Hack Growth' text='Overcame any hurdle or any other problem.'/>
      </div>
    </div>
  );
};

export default Service;
