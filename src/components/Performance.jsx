import React, { useState } from "react";

export const Performance = () => {
  const data = ["a", "b", "c", "d"];

  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <List people={people} />
    </div>
  );
};
