import axios from "axios";
import React, { useEffect, useState } from "react";

export const Fetchhook = (url) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        console.log(user.login);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);

        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  return { isLoading, isError, user };
};
