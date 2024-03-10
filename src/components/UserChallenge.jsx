import React, { useState } from "react";

export const UserChallenge = () => {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState(null);

  const login = () => {
    setName("chintu");
    setFlag(true);
  };
  const logout = () => {
    setName(null);
    setFlag(false);
  };

  return (
    <div>
      {flag ? (
        <div>
          <h4>helllo there user name :{name}</h4>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <>
          <h4>plz login name is {name}</h4>
          <button onClick={login}>login</button>
        </>
      )}
    </div>
  );
};
