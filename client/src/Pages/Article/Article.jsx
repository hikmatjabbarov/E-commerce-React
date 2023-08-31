import React from "react";
import "../../sass/pages/Article/article.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Frame from "../../assets/frame.jpg";
import User from "../../assets/user.jpg";
import BlogCard from "../Blog/BlogCard";
import Card1 from "../../assets/blog1.jpg";
import Card2 from "../../assets/blog2.jpg";
import Card3 from "../../assets/blog3.jpg";
import Social from "../Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";

const Article = () => {
  return (
    <div>
      <Header variant="secondary" className={"dark"} />
      <div className="artmain">
        <div className="article-title">
          <div className="title-tag">
            <p className="title-home">
              <Link to="/">Home</Link>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
              >
                <g clipPath="url(#clip0_3007_12067)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                    fill="#BDBDBD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3007_12067">
                    <rect
                      width="9"
                      height="16"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p className="title-shop">
              <Link
                style={{ textDecoration: "none", color: "#BDBDBD" }}
                to="/shop"
              >
                Shop
              </Link>
            </p>
          </div>
          <h1 className="learnblog">Why is Figma crashing?</h1>
          <h1 className="learnwith">
            We know how large objects will act, but things on a small scale.
          </h1>
        </div>
      </div>
      <div className="content-blog">
        <div className="img-cont">
          <img src={Frame} alt="" />
        </div>
        <div className="text-content">
          <h1>1 - Temper ENIM consequent</h1>
          <p>
            Temper ENIM consequent excitation dolor et else desert labor painter
            excitation venial consequent ex temper. Null labors Lore acute labor
            Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
            EU liquid sent Fiat door magma official. ET minim excitation painter
            dolor Dolores. Dolor ad else acute dolor nostrum quit also met
            Mollie Fiat elite official. Cilium ENIM dolor labor venial labor in
            desert sit venial inure ex official.
          </p>
          <p>
            ENIM null voltage liquid door et ConnectEDU cilium est. Cuppa
            nostrum Nisei sent voltage ID. Else ConnectEDU sit UT reprehended
            desert labrum minim null et.Duis consequent met labors non acute
            elite ad cilium dolor inure ex ENIM excitation. Painter labors
            occaecat elite ex liquid quit Nisei official minim labor liquid
            official sit UT. Ali quip Nisei commodo door met cupidity UT magma
            venial magma door adipisicing painter.
          </p>
        </div>
        <div className="text-content">
          <h1>2 - Temper ENIM consequent</h1>
          <p>
            Temper ENIM consequent excitation dolor et else desert labor painter
            excitation venial consequent ex temper. Null labors Lore acute labor
            Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
            EU liquid sent Fiat door magma official. ET minim excitation painter
            dolor Dolores. Dolor ad else acute dolor nostrum quit also met
            Mollie Fiat elite official. Cilium ENIM dolor labor venial labor in
            desert sit venial inure ex official.
          </p>
          <p>
            ENIM null voltage liquid door et ConnectEDU cilium est. Cuppa
            nostrum Nisei sent voltage ID. Else ConnectEDU sit UT reprehended
            desert labrum minim null et.Duis consequent met labors non acute
            elite ad cilium dolor inure ex ENIM excitation. Painter labors
            occaecat elite ex liquid quit Nisei official minim labor liquid
            official sit UT. Ali quip Nisei commodo door met cupidity UT magma
            venial magma door adipisicing painter.
          </p>
          <p>
            Temper ENIM consequent excitation dolor et else desert labor painter
            excitation venial consequent ex temper. Null labors Lore acute labor
            Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
            EU liquid sent Fiat door magma official. ET minim excitation painter
            dolor Dolores. Dolor ad else acute dolor nostrum quit also met
            Mollie Fiat elite official. Cilium ENIM dolor labor venial labor in
            desert sit venial inure ex official.
          </p>
        </div>
        <div className="text-contenlast">
          <p>
            Nam libero temp ore, cum solute obis est legend option clique Nikhil
            imp edit quo minus id quo Maxime place at facere possums,
          </p>
        </div>
      </div>
      <div className="member-content">
        <div className="member-img">
          <img src={User} alt="user" />
        </div>
        <div className="member-id">
          <h1>Kevin William</h1>
          <p>
            Ali qua id Fiat nostrum inure ex door ea quit id quit ad et. Sent
            quit else painter door desert Mollie Dolores cilium minim temper
            ENIM. Elite acute inure temper cupidity incident sent desert UT
            voltage acute id desert Nisei. Ali qua id Fiat nostrum inure ex door
            ea quit id quit ad et. Sent quit else painter door desert Mollie
            Dolores cilium minim temper ENIM. Elite acute inure temper cupidity
            incident sent desert UT voltage acute id desert Nisei.
          </p>
        </div>
      </div>

      <div className="featured-blog">
        <h1 className="learnblog">Featured Posts</h1>
      </div>
      <div className="blogcards">
        <div className="blogcardmain">
          <BlogCard
            src={Card1}
            title="Loudest à la Madison #1 (L'integral)"
            subtitle="We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away."
            date="22 April 2021"
            comments="10"
          />
          <BlogCard
            src={Card2}
            title="Loudest à la Madison #1 (L'integral)"
            subtitle="We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away."
            date="22 April 2021"
            comments="10"
          />
          <BlogCard
            src={Card3}
            title="Loudest à la Madison #1 (L'integral)"
            subtitle="We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away."
            date="22 April 2021"
            comments="10"
          />
        </div>
      </div>
      <div className="get-started">
        <div className="subscribetext">
          <h1>Subscribe For Latest Newsletter</h1>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
        </div>
        <div>
          <button className="get-btn">Get Started</button>
        </div>
      </div>
      <Social className={"white"} />
      <Footer />
      <Copy />
    </div>
  );
};

export default Article;
