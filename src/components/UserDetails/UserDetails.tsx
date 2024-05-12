import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect, FormEvent } from "react";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

const UserDetails = () => {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    if (
      user.firstName.length <= 0 ||
      user.lastName.length <= 0 ||
      user.email.length <= 0
    ) {
    }
    try {
      await fetch(`https://dummyjson.com/users/${userID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      console.log(user);
      alert("User Data Update!");

      navigate("/user-list");
    } catch (error) {}
  };

  const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser(
      (prev) =>
        prev && {
          ...prev,
          [name]: value,
        }
    );
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
            <input
              type="text"
              id="first-name"
              value={user.firstName}
              onChange={updateUser}
              name="firstName"
            />
          </label>
          <label htmlFor="last-name">
            Last Name:
            <input
              type="text"
              id="last-name"
              value={user.lastName}
              onChange={updateUser}
              name="lastName"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={updateUser}
              name="email"
            />
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
