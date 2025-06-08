import { useState } from "react";

export const Counter = () => {
  //   let count = 10;

  const [count, counterFx] = useState(0);
  const handlePlus = () => {
    // count++;
    counterFx(count + 1);
    // console.log("click", count);
  };
  const handleMinus = () => {
    // count--;
    counterFx(count - 1);
    // console.log("clickminus", count);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
};

export default Counter;
