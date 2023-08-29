import React from "react";
import "../../sass/pages/Details/details.scss";
import Advertbar from "../../components/Header/Advertbar";
import Header from "../../components/Header/Header";
import Interface from "./Interface";
import Partner from "../Home/Banner/Partner";
import Social from "../Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";
import { Proabout } from "./Proabout";
import Bestseller from "./Card/Bestseller";

const Details = () => {
  return (
    <div>
      <Advertbar />
      <Header />
      <Interface />
      <Proabout />
      <Bestseller />

      <Social variant="white" />
      <Footer />
      <Copy />
    </div>
  );
};

export default Details;
