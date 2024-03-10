import React, { useState } from "react";

export const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "tony",
    age: 29,
    hobby: "exploring the tech",
  });
  //   const [name, setName] = useState("tony");
  //   const [age, setAge] = useState(20);
  //   const [hobby, setHobby] = useState("exploring new tech");

  const changer = () => {
    // setName("ironman");
    // setAge(45);
    // setHobby("flying in the air by suit");

    setPerson({
      ...person,
      name: "ironman",
      //   age: 50,
      //   hobby: "exploring the univwrse by suit",
    });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button onClick={changer} className="btn">
        Change
      </button>
    </div>
  );
};
