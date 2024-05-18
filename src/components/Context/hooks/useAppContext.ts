import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect, FormEvent } from "react";
import { User } from "../../UserDetails/UserDetails";

type Data = {
  userList: User[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  updateUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fetchUser: () => Promise<void>;
};

const useAppContext = (): Data => {
  const [user, setUser] = useState<User[]>([]);
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

  return { userList, fetchUser, handleSubmit, updateUser };
};
