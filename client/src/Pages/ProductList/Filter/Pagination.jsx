import React from "react";
import "../../../sass/pages/ProductList/Filter/pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pg-first">First</div>
      <div className="pg-one">1</div>
      <div className="pg-second">2</div>
      <div className="pg-third">3</div>
      <div className="pg-next">Next</div>
    </div>
  );
};

export default Pagination;
