import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error("Something goes wrong!");

      const { users } = await response.json();
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user-list/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
