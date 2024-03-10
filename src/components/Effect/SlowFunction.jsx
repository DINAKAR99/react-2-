import React from "react";

export const SlowFunction = () => {
  let value = 0;
  for (let index = 0; index < 1000000000; index++) {
    value += index;
  }
  return value;
};
