import React, { useEffect, useState } from "react";

export const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondvalue, setSecondvalue] = useState(0);

  useEffect(() => {
    console.log("hello its the first");
  }, [value]);

  useEffect(() => {
    console.log("hello its the second");
  }, [secondvalue]);
  return (
    <div>
      <h1>value:{value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        click
      </button>
      <h1>secondvalue:{secondvalue}</h1>
      <button onClick={() => setSecondvalue(secondvalue + 1)} className="btn">
        click
      </button>
    </div>
  );
};
