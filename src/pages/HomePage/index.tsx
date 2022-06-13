import React, { useContext } from "react";

import { SpecialLetter, TaskMenu } from "../../components";

import AppContext from "../../contexts/appContext";
import { NavBar, Main, CompletedMenu, Body } from "./styles";

const Home: React.FC = () => {
  const { signed, user } = useContext(AppContext);

  return (
    <Body>
      <NavBar>
        <SpecialLetter text="TODO.LIST" style={{ fontSize: "5rem" }} />
        {user ? user.name : "create account"}
      </NavBar>
      <Main>
        <TaskMenu title="tasks"/>
        {/* <TasksMenu></TasksMenu>
        <TasksMenu></TasksMenu> */}
        {/* <CompletedMenu></CompletedMenu> */}
      </Main>
    </Body>
  );
};

export default Home;
