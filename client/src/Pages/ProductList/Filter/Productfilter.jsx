import React from "react";
import "../../../sass/pages/ProductList/Filter/productfilter.scss";

const Productfilter = () => {
  return (
    <div className="main-product">
      <div className="static-main">
        <div className="product-title">
          <div>
            <p className="showing">Showing all 12 results</p>
          </div>
          <div className="view">
            <h5 className="views">Views:</h5>
            <div className="filter-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1 2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H5.5C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5V5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7H2.5C2.10218 7 1.72064 6.84196 1.43934 6.56066C1.15804 6.27936 1 5.89782 1 5.5V2.5ZM9 2.5C9 2.10218 9.15804 1.72064 9.43934 1.43934C9.72064 1.15804 10.1022 1 10.5 1H13.5C13.8978 1 14.2794 1.15804 14.5607 1.43934C14.842 1.72064 15 2.10218 15 2.5V5.5C15 5.89782 14.842 6.27936 14.5607 6.56066C14.2794 6.84196 13.8978 7 13.5 7H10.5C10.1022 7 9.72064 6.84196 9.43934 6.56066C9.15804 6.27936 9 5.89782 9 5.5V2.5ZM1 10.5C1 10.1022 1.15804 9.72064 1.43934 9.43934C1.72064 9.15804 2.10218 9 2.5 9H5.5C5.89782 9 6.27936 9.15804 6.56066 9.43934C6.84196 9.72064 7 10.1022 7 10.5V13.5C7 13.8978 6.84196 14.2794 6.56066 14.5607C6.27936 14.842 5.89782 15 5.5 15H2.5C2.10218 15 1.72064 14.842 1.43934 14.5607C1.15804 14.2794 1 13.8978 1 13.5V10.5ZM9 10.5C9 10.1022 9.15804 9.72064 9.43934 9.43934C9.72064 9.15804 10.1022 9 10.5 9H13.5C13.8978 9 14.2794 9.15804 14.5607 9.43934C14.842 9.72064 15 10.1022 15 10.5V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H10.5C10.1022 15 9.72064 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V10.5Z"
                  fill="#252B42"
                />
              </svg>
            </div>
            <div className="filter-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.50063 12.5009C4.50063 12.3683 4.55331 12.2411 4.64708 12.1473C4.74085 12.0536 4.86802 12.0009 5.00063 12.0009H14.0006C14.1332 12.0009 14.2604 12.0536 14.3542 12.1473C14.448 12.2411 14.5006 12.3683 14.5006 12.5009C14.5006 12.6335 14.448 12.7607 14.3542 12.8544C14.2604 12.9482 14.1332 13.0009 14.0006 13.0009H5.00063C4.86802 13.0009 4.74085 12.9482 4.64708 12.8544C4.55331 12.7607 4.50063 12.6335 4.50063 12.5009ZM4.50063 8.50089C4.50063 8.36829 4.55331 8.24111 4.64708 8.14734C4.74085 8.05357 4.86802 8.00089 5.00063 8.00089H14.0006C14.1332 8.00089 14.2604 8.05357 14.3542 8.14734C14.448 8.24111 14.5006 8.36829 14.5006 8.50089C14.5006 8.6335 14.448 8.76068 14.3542 8.85445C14.2604 8.94822 14.1332 9.00089 14.0006 9.00089H5.00063C4.86802 9.00089 4.74085 8.94822 4.64708 8.85445C4.55331 8.76068 4.50063 8.6335 4.50063 8.50089ZM4.50063 4.50089C4.50063 4.36829 4.55331 4.24111 4.64708 4.14734C4.74085 4.05357 4.86802 4.00089 5.00063 4.00089H14.0006C14.1332 4.00089 14.2604 4.05357 14.3542 4.14734C14.448 4.24111 14.5006 4.36829 14.5006 4.50089C14.5006 4.6335 14.448 4.76068 14.3542 4.85445C14.2604 4.94822 14.1332 5.00089 14.0006 5.00089H5.00063C4.86802 5.00089 4.74085 4.94822 4.64708 4.85445C4.55331 4.76068 4.50063 4.6335 4.50063 4.50089ZM3.35463 3.14689C3.40119 3.19334 3.43814 3.24851 3.46334 3.30926C3.48855 3.37001 3.50153 3.43513 3.50153 3.50089C3.50153 3.56666 3.48855 3.63178 3.46334 3.69253C3.43814 3.75327 3.40119 3.80845 3.35463 3.85489L1.85463 5.35489C1.80819 5.40146 1.75301 5.4384 1.69227 5.46361C1.63152 5.48881 1.5664 5.50179 1.50063 5.50179C1.43486 5.50179 1.36974 5.48881 1.309 5.46361C1.24825 5.4384 1.19308 5.40146 1.14663 5.35489L0.646632 4.85489C0.600144 4.80841 0.563267 4.75322 0.538108 4.69248C0.512949 4.63174 0.5 4.56664 0.5 4.50089C0.5 4.43515 0.512949 4.37005 0.538108 4.30931C0.563267 4.24857 0.600144 4.19338 0.646632 4.14689C0.69312 4.10041 0.748309 4.06353 0.809048 4.03837C0.869788 4.01321 0.934888 4.00026 1.00063 4.00026C1.06638 4.00026 1.13148 4.01321 1.19222 4.03837C1.25295 4.06353 1.30814 4.10041 1.35463 4.14689L1.50063 4.29389L2.64663 3.14689C2.69308 3.10033 2.74825 3.06339 2.809 3.03818C2.86974 3.01297 2.93486 3 3.00063 3C3.0664 3 3.13152 3.01297 3.19227 3.03818C3.25301 3.06339 3.30819 3.10033 3.35463 3.14689ZM3.35463 7.14689C3.40119 7.19334 3.43814 7.24852 3.46334 7.30926C3.48855 7.37001 3.50153 7.43513 3.50153 7.50089C3.50153 7.56666 3.48855 7.63178 3.46334 7.69253C3.43814 7.75327 3.40119 7.80845 3.35463 7.85489L1.85463 9.35489C1.80819 9.40146 1.75301 9.4384 1.69227 9.46361C1.63152 9.48881 1.5664 9.50179 1.50063 9.50179C1.43486 9.50179 1.36974 9.48881 1.309 9.46361C1.24825 9.4384 1.19308 9.40146 1.14663 9.35489L0.646632 8.85489C0.552745 8.76101 0.5 8.63367 0.5 8.50089C0.5 8.36812 0.552745 8.24078 0.646632 8.14689C0.740518 8.05301 0.867856 8.00026 1.00063 8.00026C1.13341 8.00026 1.26074 8.05301 1.35463 8.14689L1.50063 8.29389L2.64663 7.14689C2.69308 7.10033 2.74825 7.06339 2.809 7.03818C2.86974 7.01297 2.93486 7 3.00063 7C3.0664 7 3.13152 7.01297 3.19227 7.03818C3.25301 7.06339 3.30819 7.10033 3.35463 7.14689ZM3.35463 11.1469C3.40119 11.1933 3.43814 11.2485 3.46334 11.3093C3.48855 11.37 3.50153 11.4351 3.50153 11.5009C3.50153 11.5667 3.48855 11.6318 3.46334 11.6925C3.43814 11.7533 3.40119 11.8084 3.35463 11.8549L1.85463 13.3549C1.80819 13.4015 1.75301 13.4384 1.69227 13.4636C1.63152 13.4888 1.5664 13.5018 1.50063 13.5018C1.43486 13.5018 1.36974 13.4888 1.309 13.4636C1.24825 13.4384 1.19308 13.4015 1.14663 13.3549L0.646632 12.8549C0.552745 12.761 0.5 12.6337 0.5 12.5009C0.5 12.3681 0.552745 12.2408 0.646632 12.1469C0.740518 12.053 0.867856 12.0003 1.00063 12.0003C1.13341 12.0003 1.26074 12.053 1.35463 12.1469L1.50063 12.2939L2.64663 11.1469C2.69308 11.1003 2.74825 11.0634 2.809 11.0382C2.86974 11.013 2.93486 11 3.00063 11C3.0664 11 3.13152 11.013 3.19227 11.0382C3.25301 11.0634 3.30819 11.1003 3.35463 11.1469Z"
                  fill="#737373"
                />
              </svg>
            </div>
          </div>
          <div>
            <select className="select-pop">
              <option value="Popularity">Popularity</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productfilter;