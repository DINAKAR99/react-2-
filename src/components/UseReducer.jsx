import React, { useReducer, useState } from "react";
import { Data } from "./Data";
import reducer from "./ReducerPack";

export const UseReducer = () => {
  //   const [people, setPeople] = useState(Data);

  const DefaultState = {
    people: Data,
    isLoading: false,
  };

  const [state, carrier] = useReducer(reducer, DefaultState);

  const clearAll = () => {
    // setPeople([]);
    carrier({ type: CLEAR_ALL });
  };
  const resetAll = () => {
    // setPeople(Data);
    carrier({ type: RESET_ALL });
  };
  const clear = (id) => {
    carrier({ type: CLEAR_SINGLE, id });
    // const newPeople = people.filter((p1) => p1.id !== id);
    // setPeople(newPeople);
  };
  //   console.log(state);
  return (
    <div>
      {state.people.map((item) => {
        const { id, name } = item;
        return (
          <div>
            <h1 key={id}> {name}</h1>
            <button onClick={() => clear(id)}>clear</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button onClick={resetAll} style={{ marginTop: "2rem" }}>
          reset
        </button>
      ) : (
        <button onClick={clearAll} style={{ marginTop: "2rem" }}>
          clearAll
        </button>
      )}
    </div>
  );
};
