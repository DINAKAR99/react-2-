import React, { useRef, useState } from "react";

function UseRefBasics() {
  const [Numberr, setNumberr] = useState(0);
  const refContainer = useRef(null);

  console.log(refContainer);
  const inc = () => {
    setNumberr(Numberr + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" ref={refContainer} />
        <button>submit</button>
      </form>

      <h1>value:: {Numberr}</h1>
      <button onClick={inc}>increase</button>
    </div>
  );
}

export default UseRefBasics;
