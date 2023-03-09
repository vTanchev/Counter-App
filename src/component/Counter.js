import React, { useState } from "react";

import Button from "./UI/Button";

import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

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

  return (
    <div className={classes["countainer"]}>
      <h3>Counter App</h3>
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
