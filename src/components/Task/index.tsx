import React from "react";

import { Body } from "./styles";

interface ITaskProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const Task: React.FC<ITaskProps> = (props) => {
  return (
    <Body onClick={props.onClick}>
      <div className="title">{props.title}</div>
    </Body>
  );
};

export default Task;
