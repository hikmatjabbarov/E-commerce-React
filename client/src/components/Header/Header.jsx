import React from "react";
import { Logo } from "../Logo/Logo";
import "../../sass/components/Header/header.scss";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../helpers";
import forest from "../../assets/forest.jpeg";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ variant, className }) => {
  const navigate = useNavigate();
  const { jwt } = userData();
  const logOut = () => {
    localStorage.setItem("user", "");
    navigate("/");
  };
  return (
    <div className={`header-first ${className}`}>
      <div className=" header-second   ">
        <Logo />
        {variant === "primary" && (
          <>
            <nav>
              <ul className="header-third">
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="header-li">
                  <Link
                    to="/shop"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                    >
                      <path
                        d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
                        fill="#252B42"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Pages
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header-login ">
              {!jwt && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3007_12040)">
                    <path
                      d="M6.49951 6C7.29516 6 8.05822 5.68393 8.62083 5.12132C9.18344 4.55871 9.49951 3.79565 9.49951 3C9.49951 2.20435 9.18344 1.44129 8.62083 0.87868C8.05822 0.316071 7.29516 0 6.49951 0C5.70386 0 4.9408 0.316071 4.37819 0.87868C3.81558 1.44129 3.49951 2.20435 3.49951 3C3.49951 3.79565 3.81558 4.55871 4.37819 5.12132C4.9408 5.68393 5.70386 6 6.49951 6ZM8.49951 3C8.49951 3.53043 8.2888 4.03914 7.91372 4.41421C7.53865 4.78929 7.02994 5 6.49951 5C5.96908 5 5.46037 4.78929 5.0853 4.41421C4.71023 4.03914 4.49951 3.53043 4.49951 3C4.49951 2.46957 4.71023 1.96086 5.0853 1.58579C5.46037 1.21071 5.96908 1 6.49951 1C7.02994 1 7.53865 1.21071 7.91372 1.58579C8.2888 1.96086 8.49951 2.46957 8.49951 3ZM12.4995 11C12.4995 12 11.4995 12 11.4995 12H1.49951C1.49951 12 0.499512 12 0.499512 11C0.499512 10 1.49951 7 6.49951 7C11.4995 7 12.4995 10 12.4995 11ZM11.4995 10.996C11.4985 10.75 11.3455 10.01 10.6675 9.332C10.0155 8.68 8.78851 8 6.49951 8C4.20951 8 2.98351 8.68 2.33151 9.332C1.65351 10.01 1.50151 10.75 1.49951 10.996H11.4995Z"
                      fill="#B73225"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3007_12040">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.499512)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {jwt && (
                <img
                  src={forest}
                  alt=""
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              )}
              {!jwt && (
                <button className="login-btn">
                  <Link style={{ color: "#B73225" }} to="/login">
                    Login
                  </Link>
                </button>
              )}
              /
              {!jwt && (
                <button className="login-btn">
                  <Link style={{ color: "#B73225" }} to="/signup">
                    Register
                  </Link>
                </button>
              )}
              {jwt && (
                <button className="logout" onClick={logOut}>
                  Logout
                </button>
              )}
              <SearchBar />
              <button className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3007_12051)">
                    <path
                      d="M0.5 1.5C0.5 1.36739 0.552678 1.24021 0.646447 1.14645C0.740215 1.05268 0.867392 1 1 1H2.5C2.61153 1.00003 2.71985 1.03735 2.80773 1.10602C2.89561 1.1747 2.95801 1.27078 2.985 1.379L3.39 3H15C15.0734 3.00007 15.1459 3.0163 15.2124 3.04755C15.2788 3.0788 15.3375 3.12429 15.3844 3.1808C15.4313 3.23731 15.4651 3.30345 15.4835 3.37452C15.502 3.44558 15.5045 3.51984 15.491 3.592L13.991 11.592C13.9696 11.7066 13.9087 11.8101 13.8191 11.8846C13.7294 11.9591 13.6166 11.9999 13.5 12H4.5C4.38343 11.9999 4.27057 11.9591 4.18091 11.8846C4.09126 11.8101 4.03045 11.7066 4.009 11.592L2.51 3.607L2.11 2H1C0.867392 2 0.740215 1.94732 0.646447 1.85355C0.552678 1.75979 0.5 1.63261 0.5 1.5ZM3.602 4L4.915 11H13.085L14.398 4H3.602ZM5.5 12C4.96957 12 4.46086 12.2107 4.08579 12.5858C3.71071 12.9609 3.5 13.4696 3.5 14C3.5 14.5304 3.71071 15.0391 4.08579 15.4142C4.46086 15.7893 4.96957 16 5.5 16C6.03043 16 6.53914 15.7893 6.91421 15.4142C7.28929 15.0391 7.5 14.5304 7.5 14C7.5 13.4696 7.28929 12.9609 6.91421 12.5858C6.53914 12.2107 6.03043 12 5.5 12ZM12.5 12C11.9696 12 11.4609 12.2107 11.0858 12.5858C10.7107 12.9609 10.5 13.4696 10.5 14C10.5 14.5304 10.7107 15.0391 11.0858 15.4142C11.4609 15.7893 11.9696 16 12.5 16C13.0304 16 13.5391 15.7893 13.9142 15.4142C14.2893 15.0391 14.5 14.5304 14.5 14C14.5 13.4696 14.2893 12.9609 13.9142 12.5858C13.5391 12.2107 13.0304 12 12.5 12ZM5.5 13C5.76522 13 6.01957 13.1054 6.20711 13.2929C6.39464 13.4804 6.5 13.7348 6.5 14C6.5 14.2652 6.39464 14.5196 6.20711 14.7071C6.01957 14.8946 5.76522 15 5.5 15C5.23478 15 4.98043 14.8946 4.79289 14.7071C4.60536 14.5196 4.5 14.2652 4.5 14C4.5 13.7348 4.60536 13.4804 4.79289 13.2929C4.98043 13.1054 5.23478 13 5.5 13ZM12.5 13C12.7652 13 13.0196 13.1054 13.2071 13.2929C13.3946 13.4804 13.5 13.7348 13.5 14C13.5 14.2652 13.3946 14.5196 13.2071 14.7071C13.0196 14.8946 12.7652 15 12.5 15C12.2348 15 11.9804 14.8946 11.7929 14.7071C11.6054 14.5196 11.5 14.2652 11.5 14C11.5 13.7348 11.6054 13.4804 11.7929 13.2929C11.9804 13.1054 12.2348 13 12.5 13Z"
                      fill="#B73225"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3007_12051">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>1</span>
              </button>
              <button className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3007_12057)">
                    <path
                      d="M8.4999 2.74805L7.7829 2.01105C6.0999 0.281049 3.0139 0.878049 1.89989 3.05305C1.37689 4.07605 1.25889 5.55305 2.21389 7.43805C3.13389 9.25305 5.0479 11.427 8.4999 13.795C11.9519 11.427 13.8649 9.25305 14.7859 7.43805C15.7409 5.55205 15.6239 4.07605 15.0999 3.05305C13.9859 0.878049 10.8999 0.280049 9.2169 2.01005L8.4999 2.74805ZM8.4999 15C-6.83311 4.86805 3.77889 -3.03995 8.32389 1.14305C8.38389 1.19805 8.44289 1.25505 8.4999 1.31405C8.55632 1.2551 8.61503 1.19839 8.67589 1.14405C13.2199 -3.04195 23.8329 4.86705 8.4999 15Z"
                      fill="#B73225"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3007_12057">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>1</span>
              </button>
            </div>
          </>
        )}
        {variant === "secondary" && (
          <>
            <nav>
              <ul className="header-secondary">
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="header-li">
                  <Link
                    to="/product"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "#252B42" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="btn-sign">
              <Link to="/login" className="btn-log">
                Login
              </Link>
              <Link to="/signup" className="btn-become">
                Become a member
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2879_7623)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2879_7623">
                      <rect width="12" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
