import React, { useState, useEffect } from "react";
// import parse from "html-react-parser";

import { Letter } from "./styles";

type SpecialLetterProps = {
  text: string;
  style?: React.CSSProperties;
};

const SpecialLetter = (props: SpecialLetterProps) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const allowed = ["a", "A", "e", "E", "o", "O", "i", "I", "u", "U", "."];
    let aux: string = "";
    for (let i = 0; i < props.text.length; i++) {
      let a: string = props.text.charAt(i);

      if (allowed.includes(a)) {
        aux += `<span>${a}</span>`;
      } else {
        aux += a;
      }
    }
    setText(aux);
  }, []);

  return (
    <Letter style={props.style}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Letter>
  );
};

export default SpecialLetter;
