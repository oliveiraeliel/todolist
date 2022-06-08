import React from "react";

import { Body, Slogan, Logo } from "./styles";

import { Button, SpecialLetter } from "../../components";

const Home: React.FC = () => {
  return (
    <>
      <Body>
        <SpecialLetter text="TODO.LIST"/>
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
        <Button button_text="let's get started" onClick={()=>{alert("a")}}/>
        <a className="start-without-account" href="">start without account</a>
      </Body>
    </>
  );
};

export default Home;
