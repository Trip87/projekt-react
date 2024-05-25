import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav data-testid="nav-test-id">
      <ul>
        <li>
          <Link to="/user-list">UserList</Link>
        </li>
        <li>
          <Link to="/user-form">AddUser</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
