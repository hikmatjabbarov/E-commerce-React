import React from "react";
import "../../sass/pages/About/about.scss";
import Header from "../../components/Header/Header";
import Hero from "../../assets/hero.jpg";
import Video from "../../assets/Video.jpg";
import Member1 from "../../assets/member1.jpg";
import Member2 from "../../assets/member2.jpg";
import Member3 from "../../assets/member3.jpg";
import Member from "./Member";
import Partner from "../Home/Banner/Partner";
import Cookie from "../../assets/Cookie.jpg";
import Social from "../Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";

const About = () => {
  return (
    <div>
      <div className="hero-main">
        <Header variant="secondary" />
        <div className="card-hero">
          <div className="hero-content">
            <h6>ABOUT COMPANY</h6>
            <h1>ABOUT US</h1>
            <p>
              We know how large objects will act, but things on a small scale
            </p>
            <button>Get Quote Now</button>
          </div>
          <div className="hero-img">
            <img src={Hero} alt="hero" />
          </div>
        </div>
        <div className="promlems-text">
          <div className="first-text">
            <h5>Problems trying</h5>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
          <div className="second-text">
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="visitors">
          <div>
            <h1>15K</h1>
            <p>Happy Customers</p>
          </div>
          <div>
            <h1>150K </h1>
            <p>Monthly Visitors</p>
          </div>
          <div>
            <h1>15</h1>
            <p>Countries Worldwide</p>
          </div>
          <div>
            <h1>100+</h1>
            <p>Top Partners</p>
          </div>
        </div>
        <div className="video-card">
          <img src={Video} alt="video" />
        </div>
        <div className="team">
          <div className="team-content">
            <h1>Meet Our Team</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="memberize">
            <Member src={Member1} user="Username" />
            <Member src={Member2} user="Username" />
            <Member src={Member3} user="Username" />
          </div>
        </div>
      </div>
      <div className="partner-big">
        <div className="parner-text">
          <h1>Big Companies Are Here</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Partner className={"light"} />
      </div>
      <div className="workwith">
        <div className="firstside">
          <h3>WORK WITH US</h3>
          <h1>Now Let’s grow Yours</h1>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button>Work With!</button>
        </div>
        <div className="secondside">
          <img src={Cookie} alt="cookie" />
        </div>
      </div>
      <Social className={"white"} />
      <Footer />
      <Copy />
    </div>
  );
};

export default About;
