import React from "react";
import "../../sass/pages/Contact/support.scss";

const Support = ({ src, className }) => {
  return (
    <div className={`support-card ${className}`}>
      <img src={src} alt="icon" />
      <h1>georgia.young@example.com</h1>
      <h2>georgia.young@ple.com</h2>
      <p>Get Support</p>
      <button>Submit Request</button>
    </div>
  );
};

export default Support;
