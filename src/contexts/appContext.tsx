import React, { createContext, useState } from "react";

interface IAppContext {
  signed: boolean;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  useLocaly: boolean;
  setUseLocaly: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUser {
  name: string;
  email: string;
}

interface IListInfos {
  infos: Array<infos>;
}

type infos = {
  title: string;
  description?: string;
  createdAt: string;
};

interface IChildren {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const userInfos: IUser | null = JSON.parse(
  localStorage.getItem("todolist@user") || "null"
);
const listInfos: IListInfos | null = JSON.parse(
  localStorage.getItem("todolist@listInfos") || "null"
);

const AppProvider: React.FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(userInfos);
  const [list, setList] = useState<IListInfos | null>(listInfos);
  const [useLocaly, setUseLocaly] = useState<boolean>(Boolean(userInfos));

  const states = {
    signed: Boolean(userInfos),
    user,
    setUser,
    useLocaly,
    setUseLocaly,
    list,
    setList,
  };

  return <AppContext.Provider value={states}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
