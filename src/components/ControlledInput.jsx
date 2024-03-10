import React, { useState } from "react";

const ControlledInput = () => {
  const Data = [
    { id: 1, name: "j1" },
    { id: 2, name: "j2" },
    { id: 3, name: "j3" },
    { id: 4, name: "j4" },
  ];

  const frameworks = ["a", "b", "c", "d", "e"];
  const [name, setName] = useState("");
  const [user, setUser] = useState(Data);
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handler = (e) => {
    e.preventDefault();
    const newUser = { name };
    const updateduser = [...user, newUser];
    setUser(updateduser);
    setName("");
  };
  const handleShipping = (e) => {
    console.log(shipping);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(<e className="target value"></e>);
  };

  const rem = (id) => {
    const newUse = user.filter((p) => p.id != id);
    setUser(newUse);
  };

  return (
    <>
      <form className="form" onSubmit={handler}>
        <h4>controled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h3>other inpits</h3>
          <label htmlFor="shipping" className="form-label">
            Free shipping
          </label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
          <label htmlFor="framework" className="form-label">
            Free framework
          </label>
          <select
            id="framework"
            name="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((p) => {
              return <option key={p}>{p}</option>;
            })}
          </select>
        </div>
      </form>

      <h4>the list is </h4>
      {/* {user.map((p) => (
        <>
          <h1 key={p.id}>{p.name}</h1>
          <button onClick={() => rem(p.id)}> remove</button>
        </>
      ))} */}
    </>
  );
};

export default ControlledInput;
