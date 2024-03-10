import React, { useEffect, useState } from "react";

export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("hii all");
  }, []);
  const sayHello = () => {
    console.log("hello theree");
  };

  sayHello();
  return (
    <div>
      <h1>value:{value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        click
      </button>
    </div>
  );
};
