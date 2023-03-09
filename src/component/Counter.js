import React, { useState } from "react";

import Button from "./UI/Button";

import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const incrementNumber = () => {
    setCount(count + 1);
  };

  const decremenetNumber = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const multiplyCount = () => {
    setCount(count * count);
  };

  return (
    <div className={classes["countainer"]}>
      <div className={classes["counter"]}>{count}</div>
      <div className={classes["btns-container"]}>
        <Button handleOnClick={incrementNumber} btnName={"+"} />
        <Button
          handleOnClick={decremenetNumber}
          btnName={"-"}
          currentValue={count}
        />
        <Button handleOnClick={resetCount} btnName={"Reset"} />
      </div>
    </div>
  );
};
export default Counter;
