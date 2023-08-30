import React from "react";
import Advertbar from "../../components/Header/Advertbar";
import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import Partner from "./Banner/Partner";
import Pow from "./Banner/Pow";
import Products from "../Products/Products";
import Service from "./Service/Service";
import Posts from "./Posts/Posts";
import Social from "./Banner/Social";
import Footer from "../../components/Footer/Footer";
import { Copy } from "../../components/Footer/Copy";
import Featured from "../Products/Featured";
import "../../sass/pages/Home/home.scss";
const Home = () => {
  return (
    <div className="home">
      <Advertbar />
      <Header variant="primary" />
      <Banner />
      <Partner variant="white" />
      <Pow />
      <Products />
      <div className="container">
        <Featured />
        <Service />
        <Posts />
      </div>
      <Social className={"light"} />
      <Footer />
      <Copy />
    </div>
  );
};

export default Home;
