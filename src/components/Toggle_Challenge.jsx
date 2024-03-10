import { Buttonn } from "./buttonn";
import React, { useState } from "react";
import { Sample } from "./Sample";

export const Toggle_Challenge = () => {
  const [flag, setFlag] = useState(false);

  return <Buttonn setFlag={setFlag} flag={flag} />;
};
