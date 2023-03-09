import React from "react";

import classes from "./Button.module.css";

const Button = ({ btnName, handleOnClick, currentValue }) => {
  return (
    <button
      className={classes["btn"]}
      onClick={handleOnClick}
      disabled={currentValue === 0}
    >
      {btnName}
    </button>
  );
};

export default Button;
