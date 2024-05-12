import React from "react";
import { useState, useEffect } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const UserList = () => {
  const [user, setUser] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error("Something goes wrong!");

      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div></div>;
};

export default UserList;
