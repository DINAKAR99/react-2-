import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fetchhook } from "../CustomHooks/Fetchhook";

export const MultipleReturnFetchData = () => {
  const { isLoading, isError, user } = Fetchhook(
    "https://api.github.com/users/QuincyLarson"
  );

  return (
    <div>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <img src={user.avatar_url} alt="" />

          <h1>hello</h1>
        </>
      )}

      {}

      {isError ? <h1>its a error</h1> : ""}
    </div>
  );
};
