import React from "react";
import "../../../sass/pages/ProductList/Filter/filter.scss";
const Filter = () => {
  return (
    <div className="filter">
      <div className="input-main">
        <h1>Filter :</h1>
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_2787_1908)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40935 -0.0482098 7.82432 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479656 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17422 12.7707 5.79427C12.9247 7.41431 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.79369C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59996 6.4003 1.59996C5.12732 1.59996 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.79369C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995Z"
                fill="#737373"
              />
            </g>
            <defs>
              <clipPath id="clip0_2787_1908">
                <rect width="16" height="15.9998" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="categories">
        <h4>Brioche</h4>
        <ul>
          <li>Baguette</li>
          <li>Sourdough</li>
          <li>Ciabatta</li>
          <li>Croissant</li>
          <li>Brioche</li>
          <li>Brioche</li>
        </ul>
      </div>
      <div className="categories">
        <h4>Ciabatta</h4>
        <ul>
          <li>Croissant</li>
          <li>Croissant</li>
        </ul>
      </div>
      <div className="categories">
        <h4>Sourdough</h4>
        <ul>
          <li>Ciabatta</li>
          <li>Sourdough</li>
        </ul>
      </div>
      <div className="underline"></div>
      <div className="categories">
        <h1>Brands</h1>
        <label className="tag-check">
          <h6>Sourdough</h6>
          <input type="checkbox" aria-checked="checked" />
          <span className="checkmark"></span>
        </label>
        <label className="tag-check">
          <h6>Croissant</h6>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="tag-check">
          <h6>Brioche</h6>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="tag-check">
          <h6>Ciabatta</h6>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="tag-check">
          <h6>Brioche</h6>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="tag-check">
          <h6>Sourdough</h6>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="tag-check">
          <h6>Ciabatta</h6>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="underline"></div>
      <div className="palet-color">
        <div className="palet ">
          <div className="subpalet">
            <div className="colorp-red"></div>
            <h6>Sourdough</h6>
          </div>
          <div className="subpalet">
            <div className="colorp-blue"></div>
            <h6>Brioche</h6>
          </div>
          <div className="subpalet">
            <div className="colorp-orange"></div>
            <h6>Baguette</h6>
          </div>
          <div className="subpalet">
            <div className="colorp-black"></div>
            <h6>Baguette</h6>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="categories">
        <h1>Brands</h1>
        <label className="tag-check">
          <h6>Sourdough</h6>
          <input type="checkbox" aria-checked="checked" />
          <span className="checkmark radius"></span>
        </label>
        <label className="tag-check">
          <h6>Croissant</h6>
          <input type="checkbox" />
          <span className="checkmark radius"></span>
        </label>
        <label className="tag-check">
          <h6>Brioche</h6>
          <input type="checkbox" />
          <span className="checkmark radius"></span>
        </label>
        <label className="tag-check">
          <h6>Ciabatta</h6>
          <input type="checkbox" />
          <span className="checkmark radius"></span>
        </label>
        <label className="tag-check">
          <h6>Brioche</h6>
          <input type="checkbox" />
          <span className="checkmark radius"></span>
        </label>
        <label className="tag-check">
          <h6>Sourdough</h6>
          <input type="checkbox" />
          <span className="checkmark radius"></span>
        </label>
        <label className="tag-check">
          <h6>Ciabatta</h6>
          <input type="checkbox" />
          <span className="checkmark radius"></span>
        </label>
      </div>
      <div className="tag-main">
        <h1>Popular Tags</h1>
        <div className="tags">
          <div className="tag-one">
            <button>
              Agatha (9)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <g clipPath="url(#clip0_3007_12895)">
                  <path
                    d="M10.1661 9.66683L0.832764 0.333496M0.832764 9.66683L10.1661 0.333496L0.832764 9.66683Z"
                    stroke="#B73225"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3007_12895">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="tag-two">
            <div>
              <button>
                Tag
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3007_12895)">
                    <path
                      d="M10.1661 9.66683L0.832764 0.333496M0.832764 9.66683L10.1661 0.333496L0.832764 9.66683Z"
                      stroke="#B73225"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3007_12895">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div>
              <button>
                Tag
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3007_12895)">
                    <path
                      d="M10.1661 9.66683L0.832764 0.333496M0.832764 9.66683L10.1661 0.333496L0.832764 9.66683Z"
                      stroke="#B73225"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3007_12895">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="ranger">
        <h1>Filter By Price</h1>
        <input className="rangeinp" type="range" min="0" max="10000" />
        <div className="inputs">
          <input type="value" placeholder="0" />
          <input type="value" placeholder="1000" />
        </div>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default Filter;
