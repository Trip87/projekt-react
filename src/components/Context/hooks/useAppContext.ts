// import React from "react";
// import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { User } from "../../UserDetails/UserDetails";
import { useNavigate } from "react-router-dom";

export type Data = {
  userList: UserWithID[];
  addUser: (user: User) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  //   updateUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type UserWithID = User & { id: number };

export const useAppContext = (): Data => {
  const [userList, setUserList] = useState<UserWithID[]>([]);
  const navigate = useNavigate();

  const fetchUserList = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      if (!response.ok) throw new Error("Something goes wrong!");

      const { users } = await response.json();

      setUserList(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id: number) => {
    if (id > 100) {
      const newUser = userList.find((user) => user.id === id);
      setUserList((prev) => prev.filter((user) => user.id !== id));
      return;
    }
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Cannot delete User");

      const user = await response.json();

      setUserList((prev) => prev.filter((user) => user.id !== id));

      alert("Uzytkownik zostal usuniety!");
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (user: User) => {
    //aktualizacja fetcha na prawidlowy - ma tylko dodawac uzytkownika
    try {
      const response = await fetch(`https://dummyjson.com/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const newUser = await response.json();
      //dodawanie uzytkownika do naszej tablicy

      setUserList((prev) => [...prev, newUser]);

      alert("New User was added!");

      //   navigate("/user-list");
    } catch (error) {}
  };

  //   const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target;

  //     setUser(
  //       (prev) =>
  //         prev && {
  //           ...prev,
  //           [name]: value,
  //         }
  //     );
  //   };

  useEffect(() => {
    fetchUserList();
  }, []);

  return { userList, addUser, deleteUser };
};
