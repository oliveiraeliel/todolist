import React, { useContext } from "react";
import AppContext from "../../contexts/appContext";

import { Body, Menu } from "./styles";
import { Task } from "../index";

interface ITaskMenuProps {
  title: string;
}

const TaskMenu: React.FC<ITaskMenuProps> = (props) => {
  const { list } = useContext(AppContext);

  return (
    <Body>
      <div className="title">{props.title}</div>
      <Menu>
        <div className="item">
          <Task title="todolist" />
        </div>{" "}
        <div className="item">
          <Task title="todolist" />
        </div>
      </Menu>
    </Body>
  );
};

export default TaskMenu;
