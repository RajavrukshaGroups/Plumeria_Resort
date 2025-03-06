import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./loader.css"; // Ensure this file exists with styles

const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#f4d025" // Updated color
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
