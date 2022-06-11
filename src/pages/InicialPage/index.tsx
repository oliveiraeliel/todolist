import React, { useContext } from "react";
import { Body, Slogan, BottomBox } from "./styles";

import { Button, SpecialLetter } from "../../components";

import AppContext from "../../contexts/appContext";

const Init: React.FC = () => {
  
  const { useLocaly, setUseLocaly } = useContext(AppContext);

  return (
    <>
      <Body>
        <div>
          <SpecialLetter text="TODO.LIST" />
          <Slogan>
            keeping <span>things</span> organized
            <div>
              is <span>great</span>
            </div>
          </Slogan>
        </div>

        <BottomBox>
          <Button
            button_text="let's get started"
            onClick={() => (window.location.href = "auth/login")}
          />
          <a
            className="start-without-account"
            onClick={() => {
              setUseLocaly(!useLocaly);
              window.location.href = "/homepage";
            }}
          >
            start without account
          </a>
        </BottomBox>
      </Body>
    </>
  );
};

export default Init;
