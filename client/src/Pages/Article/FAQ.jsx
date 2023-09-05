import React from "react";
import "../../sass/pages/Article/faq.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Social from "../Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";

import Accordion from "../../components/Accardion/Accordion";

const FAQ = () => {
  return (
    <div>
      <Header variant={"secondary"} />
      <div className="learn-first">
        <h1 className="learnblog">FAQ</h1>
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
      </div>
      <div className="faq-acc">
        <div className="asked-ques">
          <h1>Frequently Asked Questions</h1>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="accordion">
          <Accordion
            title="Work better together"
            content="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
          />
          <Accordion
            title="OpenType features and Variable fonts"
            content="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
          />
          <Accordion
            title="Start working faster today"
            content="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
          />
          <Accordion
            title="Work at the speed of thought."
            content="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
          />
          <Accordion
            title="The Fastest way to organize"
            content="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
          />
          <Accordion
            title="The Fastest way to navigate"
            content="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
          />
        </div>
      </div>
      <div className="classical">
        <h1>Be the first to know</h1>
        <p className="clsp">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <div className="clsinput">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <p className="clsptwo">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
      </div>
      <Social className={"white"} />
      <Footer />
      <Copy />
    </div>
  );
};

export default FAQ;
