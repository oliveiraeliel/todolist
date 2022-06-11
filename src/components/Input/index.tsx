import React from "react";

import { InputBox, InputBoard } from "./styles";

interface IInputProps {
  label?: string;
  inputValue?: string;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <InputBoard>
      <label>{props.label}</label>
      <InputBox
        value={props.inputValue}
        placeholder={props.placeholder}
        type={props.type}
      ></InputBox>
    </InputBoard>
  );
};

export default Input;
