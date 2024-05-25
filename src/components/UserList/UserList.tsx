import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";

const UserList = () => {
  const { userList, deleteUser } = useContext(AppContext);

  const [hide, setHide] = useState(false);

  const handleButtonClick = () => {
    setHide((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Pokaż listę</button>
      {hide && (
        <div>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {userList.map((user) => (
              <ListItem
                key={user.id}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    <Link to={`/user-list/${user.id}`}>
                      {user.firstName} {user.lastName}
                    </Link>
                    <button onClick={() => deleteUser(user.id)}>USUŃ</button>
                  </IconButton>
                }
              >
                <ListItemText primary={`Line item ${user.id}`} />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

//   return (
//     <div>
//       <ul>
//         {userList.map((user) => (
//           <li key={user.id}>
//             <Link to={`/user-list/${user.id}`}>
//               {user.firstName} {user.lastName}
//             </Link>
//             <button onClick={() => deleteUser(user.id)}>USUŃ</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default UserList;
