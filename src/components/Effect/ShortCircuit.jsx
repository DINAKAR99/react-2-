import React, { useState } from "react";

export const ShortCircuit = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState();
  return (
    <div>
      {console.log(one && "yeah thats true")}
      {console.log(two || "yeah there was no value ")}
    </div>
  );
};
