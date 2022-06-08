import React from "react";

import { Body } from "./styles";

type ButtonProps = {
  button_text: string;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  return <Body onClick={props.onClick}>{props.button_text}</Body>;
}
