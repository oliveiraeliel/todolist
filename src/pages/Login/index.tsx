import React from "react";

import { Board, Body, InputPlace } from "./styles";

import { Input, SpecialLetter } from "../../components";

const Login: React.FC = () => {
  return (
    <Body>
      <Board>
        <div className="title">
          <SpecialLetter text="LOGIN" />
        </div>
        <InputPlace>
          <Input label="Label" />
          <Input inputValue="Value" label="Label" />
        </InputPlace>
      </Board>
    </Body>
  );
};

export default Login;
