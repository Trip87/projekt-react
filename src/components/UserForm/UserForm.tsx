import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { User } from "../UserDetails/UserDetails";
import { Button, FilledInput, FormLabel } from "@mui/material";

const UserForm = () => {
  const { addUser } = useContext(AppContext);

  const [user, setUser] = useState<User>({
    lastName: "",
    firstName: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName || !user.email) {
      alert("Uzupełnij poprawnie dane!");
      return;
    }
    addUser(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="first-name">
          First Name:
          <FilledInput
            type="text"
            id="first-name"
            value={user.firstName}
            name="firstName"
            onChange={handleChange}
            required
          />
        </FormLabel>
        <FormLabel htmlFor="last-name">
          Last Name:
          <FilledInput
            type="text"
            id="last-name"
            value={user.lastName}
            name="lastName"
            onChange={handleChange}
            required
          />
        </FormLabel>
        <FormLabel htmlFor="email">
          Email:
          <FilledInput
            type="email"
            id="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            required
          />
        </FormLabel>

        <Button variant="contained" type="submit">
          Add User
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
