import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const UserList = () => {
  const { userList, deleteUser } = useContext(AppContext);

  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/user-list/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
            <button onClick={() => deleteUser(user.id)}>USUŃ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
