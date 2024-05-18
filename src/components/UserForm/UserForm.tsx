import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { User } from "../UserDetails/UserDetails";

const UserForm = () => {
  const { addUser } = useContext(AppContext);

  const [user, setUser] = useState<User>({
    lastName: "",
    firstName: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name:
          <input
            type="text"
            id="first-name"
            value={user.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input
            type="text"
            id="last-name"
            value={user.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
