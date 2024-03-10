import React, { useState } from "react";
import { Data } from "./Data";

export const UseStateArray = () => {
  const [people, setPeople] = useState(Data);

  const clearAll = () => {
    setPeople([]);
  };
  const clear = (id) => {
    const newPeople = people.filter((p1) => p1.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div>
            <h1 key={id}> {name}</h1>
            <button onClick={() => clear(id)}>clear</button>
          </div>
        );
      })}
      <button onClick={clearAll} style={{ marginTop: "2rem" }}>
        clearAll
      </button>
    </div>
  );
};
