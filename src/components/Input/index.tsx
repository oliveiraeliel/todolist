import React from "react";

import { InputBox, InputBoard } from "./styles";

interface IInputProps {
  label?: string;
  inputValue?: string;
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <InputBoard>
      <label>{props.label}</label>
      <InputBox value={props.inputValue}></InputBox>
    </InputBoard>
  );
};

export default Input;
