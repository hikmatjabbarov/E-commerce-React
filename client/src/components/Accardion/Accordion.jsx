import React, { useState } from "react";
import "../../sass/components/Accordion/accordion.scss";
import Down from "../../assets/chevron_down.svg";
import Left from "../../assets/chevron_left.svg";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="acc-title">{title}</h3>
        <span>
          {isOpen ? (
            <img src={Down} alt="down" />
          ) : (
            <img src={Left} alt="left" />
          )}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}
export default Accordion;
