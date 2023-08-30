import React from "react";
import "../../sass/pages/Authorization/signup.scss";
import Facebook from "../../assets/facebook.svg";
import Header from "../../components/Header/Header";
import Social from "../../Pages/Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signupcont">
      <div className="signup">
        <Header variant="secondary" />
        <div className="signmain">
          <div className="titlefree">
            <h1 className="free">Sign up for free</h1>
            <h5 className="try">
              Try everything free for 30 days, no payment details required
            </h5>
          </div>

          <div className="componentinput">
            <div className="fb-back">
              <img src={Facebook} alt="facebook" />
              Facebook
            </div>
            <div className="inputoption">
              <div className="lineror"></div>
              <div className="orname">OR</div>
              <div className="lineror"></div>
            </div>
            <div className="inputs">
              <h2>Name *</h2>
              <input type="text" placeholder="Full Name * " />
            </div>
            <div className="inputs">
              <h2>*Email address *</h2>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="inputs">
              <h2>Password *</h2>
              <input type="password" placeholder="Password" />
            </div>
            <div className="started">
              <button>Get Started</button>
            </div>
            <div className="privacy">
              By filling in the form above and clicking the “Get Started”
              button, you accept and agree to Terms of Service and Privacy
              Policy.
            </div>
            <div className="already">
              <h5>Already have an account?</h5>
              <button>
                <Link style={{ color: "#B73225" }} to="/login">
                  Sign in
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Social className={"dark"} />
      <Footer className={"dark"} />
      <Copy className={"dark"} />
    </div>
  );
};

export default Signup;
