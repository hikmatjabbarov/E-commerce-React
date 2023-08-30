import React from "react";
import "../../sass/pages/About/member.scss";
import Facebook from "../../assets/facebook1.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";

const Member = ({ src, user }) => {
  return (
    <div className="usermember">
      <img className="memberimg" src={src} alt="member" />
      <h1>{user}</h1>
      <p>Profession</p>
      <div className="member-social">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="twitter" />
      </div>
    </div>
  );
};

export default Member;
