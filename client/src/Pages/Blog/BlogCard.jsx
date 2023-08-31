import React from "react";
import "../../sass/pages/Blog/blogcard.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ src, title, subtitle, date, comments }) => {
  return (
    <div className="blogstart">
      <div className="main-cover">
        <img src={src} alt="blog" />
        <div className="new-red">NEW</div>
      </div>
      <div className="contentblog">
        <div className="webtitle">
          <h5 className="googletag">Google</h5>
          <h5 className="trendingtag">Trending</h5>
          <h5 className="newtag">New</h5>
        </div>
        <div className="titleblog">{title}</div>
        <div className="subtitleblog">{subtitle}</div>
        <div className="blogdetail">
          <h5 className="dateblog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66666C2.54278 5.37111 5.20379 2.7101 8.49934 2.66666C11.7949 2.7101 14.4559 5.37111 14.4993 8.66666C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 3.99999C5.93612 4.03374 3.86642 6.10344 3.83268 8.66666C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66666C13.1323 6.10344 11.0626 4.03374 8.49934 3.99999ZM11.8327 9.33333H7.83268V5.33333H9.16601V7.99999H11.8327V9.33333ZM14.0273 4.472L12.0213 2.472L12.9607 1.52733L14.9673 3.52733L14.0273 4.47133V4.472ZM2.97068 4.472L2.02734 3.52733L4.02134 1.52733L4.96468 2.472L2.97201 4.472H2.97068Z"
                fill="#B73225"
              />
            </svg>
            {date}
          </h5>
          <h5 className="commentsblog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clipPath="url(#clip0_5152_364)">
                <path
                  d="M16.3333 13.8333H2V0.833338C2 0.741672 1.925 0.666672 1.83333 0.666672H0.666667C0.575 0.666672 0.5 0.741672 0.5 0.833338V15.1667C0.5 15.2583 0.575 15.3333 0.666667 15.3333H16.3333C16.425 15.3333 16.5 15.2583 16.5 15.1667V14C16.5 13.9083 16.425 13.8333 16.3333 13.8333ZM3.5 12.5H14.6667C14.7583 12.5 14.8333 12.425 14.8333 12.3333V3.25001C14.8333 3.10001 14.6521 3.02709 14.5479 3.13125L10.1667 7.51251L7.55417 4.92917C7.52284 4.89815 7.48054 4.88076 7.43646 4.88076C7.39238 4.88076 7.35007 4.89815 7.31875 4.92917L3.38125 8.87917C3.36596 8.89449 3.35385 8.91269 3.34562 8.93271C3.3374 8.95274 3.33322 8.97419 3.33333 8.99584V12.3333C3.33333 12.425 3.40833 12.5 3.5 12.5Z"
                  fill="#004E7C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5152_364">
                  <rect
                    width="16"
                    height="14.6667"
                    fill="white"
                    transform="translate(0.5 0.666672)"
                  />
                </clipPath>
              </defs>
            </svg>
            {comments} comments
          </h5>
        </div>
        <button className="learnmore">
          <Link to={"/blog/content"}>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
            >
              <g clipPath="url(#clip0_5152_369)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                  fill="#B73225"
                />
              </g>
              <defs>
                <clipPath id="clip0_5152_369">
                  <rect
                    width="9"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
