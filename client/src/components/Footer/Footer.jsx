import React from "react";
import "../../sass/components/Footer/footer.scss";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <div className={`main-footer ${className}`}>
      <div className={`footer  `}>
        <div className="footer-content">
          <h1>Company Info</h1>
          <ul>
            <li>
              <Link to="/about" style={{ textDecoration: "none" }}>
                About Us
              </Link>
            </li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h1>Legal</h1>
          <ul>
            <li>FAQ </li>
            <li>Carrier</li>
            <li>
              <Link to="/team" style={{ textDecoration: "none" }}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h1>Features</h1>
          <ul>
            <li>Business Marketing </li>
            <li>User Analytic</li>
            <li>Live Chat </li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className="footer-content">
          <h1>Resources</h1>
          <ul>
            <li>IOS & Android </li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div className="footer-email">
          <h1>Get in touch</h1>
          <div>
            <div className="subscribe">
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
