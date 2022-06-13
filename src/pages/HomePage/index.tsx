import React, { useContext } from "react";
import { SpecialLetter } from "../../components";

import AppContext from "../../contexts/appContext";
import { NavBar, Main } from "./styles";

const Home: React.FC = () => {
  const { signed, user } = useContext(AppContext);

  return (
    <div>
      <NavBar>
        <SpecialLetter text="TODO.LIST" style={{ fontSize: "5rem" }} />
        {user !== null ? user.name : "create account"}
      </NavBar>
      <Main></Main>
    </div>
  );
};

export default Home;
