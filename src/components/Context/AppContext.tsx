import { FC, PropsWithChildren, createContext } from "react";
import { Data, useAppContext } from "./hooks/useAppContext";

export const AppContext = createContext<Data>({} as Data);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userList, addUser, deleteUser } = useAppContext();

  return (
    <AppContext.Provider
      value={{
        userList,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
