import React, { useState } from "react";

export const UseStateGotcha = () => {
  const [kont, setKont] = useState(0);
  const changu = () => {
    setKont(
      kont + 1
      //   if (kont > 0) {
      //     console.log(prevState);
      //   }

      //   (hello) => {
      //     hello = hello + 1;
      //     console.log(hello);

      // return hello;
    );
  };
  return (
    <div>
      <h1>{kont}</h1>
      <button onClick={changu}>+</button>
    </div>
  );
};
