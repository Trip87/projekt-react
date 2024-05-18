// dopisujemy "export" poniewaz bedzie to potrzebne do uzycia useContext w komponentach

// krok 4 - należy owrappować naszą aplikacje <App /> w pliku index.tsx
// krok 5 - jakoś odczytać nasz stan z poziomu komponentu za pomoca useContext(naszContext)

import { User } from "../UserDetails/UserDetails";
import { FC, PropsWithChildren, createContext } from "react";

// krok 1 - tworzenie typu kontekstu
type AppContextType = {
  userList: User[];
  handleSubmit: () => void;
  updateUser: () => void;
};


// krok 2 - tworzymy context na bazie typu

export const AppContext = createContext<AppContextType>({} as AppContextType);

// krok 3 - tworzenie naszego providera z propsami

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userList, handleSubmit, updateUser } = useAppContext();

  return (
    <AppContext.Provider
      value={{
        userList,
        handleSubmit,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
