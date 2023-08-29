import React from "react";
import "../../sass/components/Logo/logo.scss";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo-icon">
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "#252B42" }}
      >
        IconFood
      </Link>
    </div>
  );
};
