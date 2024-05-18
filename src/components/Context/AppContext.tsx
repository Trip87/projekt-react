import { FC, PropsWithChildren, createContext } from "react";
import { Data, useAppContext } from "./hooks/useAppContext";

export const AppContext = createContext<Data>({} as Data);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userList } = useAppContext();

  return (
    <AppContext.Provider
      value={{
        userList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
