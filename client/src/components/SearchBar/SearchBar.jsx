import React from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  const ref = React.useRef(null);

  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={ref} className={`search-bar ${isActive ? "active" : ""}`}>
      <input type="text" />
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className="btn-search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <g clipPath="url(#clip0_3007_12046)">
            <path
              d="M12.2424 10.344C13.2107 9.02267 13.6444 7.38447 13.4567 5.75713C13.269 4.12979 12.4738 2.63332 11.2302 1.56711C9.98653 0.500899 8.38616 -0.056418 6.74925 0.00665514C5.11233 0.0697283 3.55959 0.748541 2.40168 1.90729C1.24376 3.06603 0.56606 4.61926 0.504158 6.25621C0.442256 7.89317 1.00072 9.49314 2.06782 10.736C3.13492 11.9789 4.63195 12.773 6.25943 12.9596C7.8869 13.1461 9.52479 12.7112 10.8454 11.742H10.8444C10.8744 11.782 10.9064 11.82 10.9424 11.857L14.7924 15.707C14.9799 15.8946 15.2343 16.0001 15.4996 16.0002C15.7648 16.0003 16.0193 15.895 16.2069 15.7075C16.3946 15.52 16.5 15.2656 16.5001 15.0003C16.5002 14.7351 16.3949 14.4806 16.2074 14.293L12.3574 10.443C12.3217 10.4068 12.2832 10.3734 12.2424 10.343V10.344ZM12.5004 6.49998C12.5004 7.22225 12.3581 7.93745 12.0817 8.60474C11.8053 9.27203 11.4002 9.87834 10.8895 10.3891C10.3788 10.8998 9.77246 11.3049 9.10517 11.5813C8.43788 11.8577 7.72268 12 7.00041 12C6.27814 12 5.56294 11.8577 4.89565 11.5813C4.22836 11.3049 3.62204 10.8998 3.11132 10.3891C2.6006 9.87834 2.19547 9.27203 1.91907 8.60474C1.64267 7.93745 1.50041 7.22225 1.50041 6.49998C1.50041 5.04129 2.07987 3.64234 3.11132 2.61089C4.14277 1.57944 5.54172 0.999979 7.00041 0.999979C8.4591 0.999979 9.85805 1.57944 10.8895 2.61089C11.9209 3.64234 12.5004 5.04129 12.5004 6.49998Z"
              fill="#B73225"
            />
          </g>
          <defs>
            <clipPath id="clip0_3007_12046">
              <rect
                width="16.0006"
                height="16.0003"
                fill="white"
                transform="translate(0.499512 -0.00012207)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
