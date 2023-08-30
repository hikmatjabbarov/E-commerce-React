import React from "react";
import "../../sass/components/Footer/copy.scss";

export const Copy = ({ className }) => {
  return (
    <div className={`copy ${className} `}>
      <p className="text">Made With Love By Finland All Right Reserved </p>
    </div>
  );
};

export default Copy;
