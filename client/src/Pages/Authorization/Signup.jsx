import React, { useState } from "react";
import "../../sass/pages/Authorization/signup.scss";
import Facebook from "../../assets/facebook.svg";
import Header from "../../components/Header/Header";
import Social from "../../Pages/Home/Banner/Social";
import Footer from "../../components/Footer/Footer";
import Copy from "../../components/Footer/Copy";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import visibilityOn from "../../assets/visibility-on.png";
import visibilityOff from "../../assets/visibility-off.png";

const initialUser = { email: "", password: "", username: "" };

const Signup = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const [visibleOn, setVisibleOn] = useState(false);
  const handleuserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const Register = async () => {
    try {
      const url = `${
        import.meta.env.VITE_APP_STRAPI_BASE_URL
      }/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
            <form
              className="form-comp"
              onSubmit={(e) => {
                e.preventDefault();
                Register();
              }}
            >
              <h2>Name *</h2>
              <input
                type="text"
                placeholder="Full Name *"
                value={user.username}
                onChange={handleuserChange}
                name="username"
              />
              <h2>*Email address</h2>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={user.email}
                onChange={handleuserChange}
                name="email"
              />
              <div className="password-sign">
                <h2>Password *</h2>
                <input
                  type={visibleOn ? "text" : "password"}
                  placeholder="Password"
                  value={user.password}
                  onChange={handleuserChange}
                  name="password"
                />
                {
                  <img
                    className="visible-sign"
                    onClick={() => setVisibleOn(!visibleOn)}
                    src={!visibleOn ? visibilityOn : visibilityOff}
                    alt=""
                  />
                }
              </div>
              <div className="started">
                <button>Get Started</button>
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
