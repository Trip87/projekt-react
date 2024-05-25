// import React from "react";
// import { Link } from "react-router-dom";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { useTranslation } from "react-i18next";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/user-list">{t("app.nav.user-list")}</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/user-form">{t("app.nav.add-user")}</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

// const Nav: React.FC = () => {
//   return (

//     // <nav
//     // data-testid="nav-test-id">

//     //   <ul>
//     //     <li>
//     //       <Link to="/user-list">UserList</Link>
//     //     </li>
//     //     <li>
//     //       <Link to="/user-form">AddUser</Link>
//     //     </li>
//     //   </ul>

//     // </nav>
//   );
// };

// export default Nav;
