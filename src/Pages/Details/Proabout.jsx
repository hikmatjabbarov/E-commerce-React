import React from "react";
import "../../sass/pages/Details/proabout.scss";
import Aboutone from "../../assets/aboutone.jpg";

export const Proabout = () => {
  return (
    <div className="proabout">
      <div className="descabout">
        <h4 className="onedesc">Description</h4>
        <h4 className="seconddesc">Additional Information</h4>
        <h4 className="thirddesc">
          Reviews <span>(0)</span>
        </h4>
      </div>
      <div className="compoabout">
        <div className="abouttext">
          <h1>The quick fox jumps over </h1>
          <div className="textfirst">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </div>
          <div className="textsecond">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </div>
          <div className="textthird">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </div>
        </div>
        <div className="aboutimg">
          <img src={Aboutone} alt="about" />
        </div>
      </div>
    </div>
  );
};
