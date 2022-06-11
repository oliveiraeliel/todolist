import React, { createContext, useState } from "react";

interface IAppContext {
  signed: boolean;
  user: object | null;
  useLocaly: boolean;
  setUseLocaly: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IChildren {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const userInfos = localStorage.getItem("user");

const AppProvider: React.FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [useLocaly, setUseLocaly] = useState<boolean>(Boolean(userInfos));

  const states = {
    signed: Boolean(user),
    user,
    setUser,
    useLocaly,
    setUseLocaly,
  };

  return <AppContext.Provider value={states}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
