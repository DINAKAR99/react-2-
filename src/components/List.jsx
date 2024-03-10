import React from "react";

export const List = ({ people }) => {
  return (
    <div>
      {people.map((p) => (
        <h1>{p}</h1>
      ))}
    </div>
  );
};
