import React from "react";
import "../../sass/pages/Contact/contact.scss";
import Header from "../../components/Header/Header";
import Contactimg from "../../assets/contact.jpg";
import Facebookicon from "../../assets/logos_facebook.svg";
import Instagramicon from "../../assets/logos_instagram.svg";
import Linkedinicon from "../../assets/logos_linkedin.svg";
import Twittericon from "../../assets/logos_twitter.svg";
import Phone from "../../assets/phone-icon.svg";
import Location from "../../assets/location-icon.svg";
import email from "../../assets/email-icon.svg";
import Support from "./Support";
import Arrow from "../../assets/arrow.svg";
import Social from "../../Pages/Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <div className="main-cont">
        <Header variant="secondary" />
        <div className="contact-card">
          <div className="subtitle-card">
            <h5 className="contactus">CONTACT US</h5>
            <h1 className="intouch">Get in touch today!</h1>
            <h6 className="willact">
              We know how large objects will act, but things on a small scale
            </h6>
            <p className="fax-phone">Phone ; +451 215 215 </p>
            <p className="fax-phone">Fax : +451 215 215</p>
            <div className="icon-social">
              <img src={Twittericon} alt="twitter" />
              <img src={Facebookicon} alt="facebook" />
              <img src={Instagramicon} alt="instagram" />
              <img src={Linkedinicon} alt="linkedin" />
            </div>
          </div>
          <div>
            <img src={Contactimg} alt="contact" />
          </div>
        </div>
        <div className="support-main">
          <div className="title-support">
            <h6 className="office">VISIT OUR OFFICE</h6>
            <h1 className="bigideas">
              We help small businesses with big ideas
            </h1>
          </div>
          <div className="support-contact">
            <Support src={Phone} />
            <Support src={Location} className={"dark"} />
            <Support src={email} />
          </div>
        </div>
      </div>
      <div>
        <div className="arrow">
          <img src={Arrow} alt="arrow" />
          <h5>WE Can't WAIT TO MEET YOU</h5>
          <h1>Let’s Talk</h1>
          <button>
            <Link to={"/contact/faq"} > Try it free now</Link>
          </button>
        </div>
      </div>
      <Social className={"white"} />
      <Footer />
      <Copy />
    </div>
  );
};

export default Contact;
