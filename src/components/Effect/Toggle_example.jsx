import React, { useState } from "react";
import { handler, sample } from "./Togger";

export const Toggle_example = () => {
  return (
    <div>
      <button onClick={() => handler(sample)}> click me</button>
      {sample ? <h2>hemlo</h2> : ""}
    </div>
  );
};
