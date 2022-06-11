import React, { useContext } from "react";

import { Body, Slogan, Logo } from "./styles";

import { Button, SpecialLetter } from "../../components";

import AppContext from "../../contexts/appContext";

const Init: React.FC = () => {
  const { useLocaly, setUseLocaly } = useContext(AppContext);

  return (
    <>
      <Body>
        <SpecialLetter text="TODO.LIST" />
        {/* <Logo>
          T<span>O</span>D<span>O</span>
          <span>.</span>L<span>I</span>ST
        </Logo> */}
        <Slogan>
          keeping <span>things</span> organized
          <div>
            is <span>great</span>
          </div>
        </Slogan>
        <Button
          button_text="let's get started"
          onClick={() => (window.location.href = "auth/login")}
        />
        <a
          className="start-without-account"
          onClick={() => {
            setUseLocaly(!useLocaly);
            window.location.href = "/home";
          }}
        >
          start without account
        </a>
      </Body>
    </>
  );
};

export default Init;
