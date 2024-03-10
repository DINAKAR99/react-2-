import React from "react";
export function Buttonn({ setFlag, flag }) {
  return (
    <div>
      <button onClick={() => setFlag(!flag)}>click me</button>
      {flag ? <Sample /> : "..."}
    </div>
  );
}
