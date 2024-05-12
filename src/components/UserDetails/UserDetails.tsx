import React from "react";
import { useParams } from "react-router-dom";

import { useState, useEffect, FormEvent } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
};

const UserDetails = () => {
  const [user, setUser] = useState<User>();
  const { userID } = useParams();

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${userID}`);
      if (!response.ok) throw new Error("Something goes wrong!");

      const user = await response.json();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchUser();
  }, [userID]);

  return user ? (
    <div>
      <h1>user details - {userID}</h1>

      <div className="user-details">
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">
            First Name:
            <input type="text" id="first-name" value={user.firstName} />
          </label>
          <label htmlFor="last-name">
            Last Name:
            <input type="text" id="last-name" value={user.lastName} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" value={user.email} />
          </label>

          <button type="submit">Edit</button>
        </form>
      </div>
    </div>
  ) : (
    <h1>User not found</h1>
  );
};

export default UserDetails;
