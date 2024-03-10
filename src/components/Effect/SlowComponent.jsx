import React, { useState } from "react";

export const SlowComponent = () => {
  const newItems = Array.from({ length: 5000 }, (_, index) => {
    return (
      <div key={index}>
        <img src="/vite.svg"></img>
      </div>
    );
  });
  const [items, setItems] = useState(newItems);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginTop: "2rem",
        }}
      >
        {items}
      </div>
    </div>
  );
};
