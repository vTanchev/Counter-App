import React from "react";

const Button = ({ btnName, handleOnClick, currentValue }) => {
  return (
    <button
      className="btn"
      onClick={handleOnClick}
      disabled={currentValue === 0}
    >
      {btnName}
    </button>
  );
};

export default Button;
