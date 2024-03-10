import React, { useMemo, useState } from "react";
import { SlowFunction } from "./Effect/SlowFunction";

export const Sample = () => {
  const value = useMemo(() => SlowFunction(), []);
  // const value = SlowFunction();
  const [val, setVal] = useState(0);
  console.log(value);
  return (
    <div>
      <button onClick={() => setVal(val + 1)}>{val}</button>
    </div>
  );
};
