import React, { useEffect, useState } from "react";
import axios from "axios";
const url = "https://api.github.com/users";
export const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  });
  return (
    <div>
      {users.map((item) => (
        <div>
          <img src={item.avatar_url} alt="" />
          <p>{item.login}</p>
        </div>
      ))}
    </div>
  );
};
