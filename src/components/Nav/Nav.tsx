import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user-list">UserList</Link>
        </li>
        <li>
          <Link to="/user-form">UserForm</Link>
        </li>
        <li>
          <Link to="/details">UserDetails</Link>
        </li>
        <li>
          <Link to="/details">Nav</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
