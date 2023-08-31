import React from "react";
import "../../sass/pages/Team/team.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Team1 from "../../assets/team1.jpg";
import Team2 from "../../assets/team2.jpg";
import Team3 from "../../assets/team3.jpg";
import Team4 from "../../assets/team4.jpg";
import Team5 from "../../assets/team5.jpg";
import Member1 from "../../assets/member1.jpg";
import Member2 from "../../assets/member2.jpg";
import Member3 from "../../assets/member3.jpg";
import Member from "../About/Member";
import Social from "../../Pages/Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";
import Member4 from "../../assets/member4.jpg";
import Member5 from "../../assets/member5.jpg";
import Member6 from "../../assets/member6.jpg";
import Member7 from "../../assets/member7.jpg";
import Member8 from "../../assets/member8.jpg";
import Member9 from "../../assets/member9.jpg";
import LogoFB from "../../assets/logo-fb.svg";
import LogoIG from "../../assets/logo-ig.svg";
import LogoLI from "../../assets/logo-linkedin.svg";
import LogoTW from "../../assets/logo-twitter.svg";

const Team = () => {
  return (
    <div>
      <Header variant={"secondary"} />
      <div className="innovation">
        <h1 className="learnwith">WHAT WE DO</h1>
        <h1 className="learnblog">Innovation tailored for you</h1>
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
      <div className="team-imgs">
        <img className="team1" src={Team1} alt="team" />
        <div className="team-second">
          <img className="team2" src={Team2} alt="team" />
          <img className="team2" src={Team4} alt="team" />
          <img className="team2" src={Team3} alt="team" />
          <img className="team2" src={Team5} alt="team" />
        </div>
      </div>
      <div className="team">
        <div className="team-content">
          <h1>Meet Our Team</h1>
        </div>
        <div className="mem-class">
          <div className="memberize">
            <Member src={Member1} user="Username" />
            <Member src={Member2} user="Username" />
            <Member src={Member3} user="Username" />
            <Member src={Member4} user="Username" />
            <Member src={Member5} user="Username" />
            <Member src={Member6} user="Username" />
            <Member src={Member7} user="Username" />
            <Member src={Member8} user="Username" />
            <Member src={Member9} user="Username" />
          </div>
        </div>
      </div>
      <div className="trial">
        <h1>Start your 14 days free trial</h1>
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        <button>Try it free now</button>
        <div className="sc-ico">
          <img src={LogoFB} alt="fb" />
          <img src={LogoIG} alt="ig" />
          <img src={LogoLI} alt="li" />
          <img src={LogoTW} alt="tw" />
        </div>
      </div>
      <Social className={"white"} />
      <Footer />
      <Copy />
    </div>
  );
};

export default Team;
