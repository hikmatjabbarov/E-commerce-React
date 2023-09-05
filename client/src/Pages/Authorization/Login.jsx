import React, { useState } from "react";
import Facebook from "../../assets/facebook.svg";
import Header from "../../components/Header/Header";
import Social from "../Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { storeUser } from "../../helpers";
import visibilityOn from "../../assets/visibility-on.png";
import visibilityOff from "../../assets/visibility-off.png";

const initialUser = { password: "", identifier: "" };

const Signin = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const [visibleOn, setVisibleOn] = useState(false);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="home">
      <div className="signup">
        <Header variant="secondary" />
        <div className="signmain">
          <div className="titlefree">
            <h1 className="free">Welcome Back</h1>
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

            <form
              className="form-comp"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <h2>*Email address </h2>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="identifier"
                value={user.identifier}
                onChange={handleChange}
              />
              <h2>*Password </h2>
              <input
                type={visibleOn ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <div className="started">
                <button>Get Started</button>
                {
                  <img
                    className="visible-photo"
                    onClick={() => setVisibleOn(!visibleOn)}
                    src={!visibleOn ? visibilityOn : visibilityOff}
                    alt=""
                  />
                }
              </div>
            </form>

            <div className="privacy">
              By filling in the form above and clicking the “Get Started”
              button, you accept and agree to Terms of Service and Privacy
              Policy.
            </div>
            <div className="already">
              <h5>Already have an account?</h5>
              <button>
                <Link style={{ color: "#B73225" }} to="/signup">
                  Sign up
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

export default Signin;
