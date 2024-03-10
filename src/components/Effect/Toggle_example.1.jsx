import React, { useState } from "react";

export const Toggle_example = () => {
  const [sample, setSample] = useState(false);

  const handler = (p) => {
    setSample(!p);
  };
  return (
    <div>
      <button onClick={() => handler(sample)}> click me</button>
      {sample ? <h2>hemlo</h2> : ""}
    </div>
  );
};
