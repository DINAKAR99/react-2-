import React, { useEffect, useState } from "react";

export const MultiReturnBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return <h2>hello all</h2>;
};
