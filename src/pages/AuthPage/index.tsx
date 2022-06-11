import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Board, Body, InputPlace } from "./styles";

import { Button, Input, SpecialLetter } from "../../components";

const AuthPage: React.FC = () => {
  const { pathname } = useLocation();
  const isLoginPage: boolean = pathname == "/auth/login";

  return (
    <Body>
      <Board>
        <div className="title">
          <SpecialLetter text={isLoginPage ? "LOGIN" : "SIGN.UP"} />
        </div>
        <InputPlace style={{ flex: isLoginPage ? "2" : "3" }}>
          {pathname == "/auth/sign-up" ? (
            <Input placeholder="your name" label="name" />
          ) : (
            ""
          )}
          <Input placeholder="email.example@mail.com" label="email" />
          <Input type="password" placeholder="your password" label="password" />
          <Button
            button_text={isLoginPage ? "login" : "create"}
            onClick={() => alert()}
          />
          <a className="bottom-text" href={isLoginPage ? "sign-up" : "login"}>
            {isLoginPage ? "create new account" : "I already have an account"}
          </a>
        </InputPlace>
      </Board>
    </Body>
  );
};

export default AuthPage;
