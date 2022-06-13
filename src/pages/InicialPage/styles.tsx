import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

export const Slogan = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  letter-spacing: 0.2rem;

  span {
    color: var(--secondary-color);
  }

  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  text-align: center;

  @keyframes fa-blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }
  .fa-blink {
    -webkit-animation: fa-blink 2s linear infinite;
    -moz-animation: fa-blink 2s linear infinite;
    -ms-animation: fa-blink 2s linear infinite;
    -o-animation: fa-blink 2s linear infinite;
    animation: fa-blink 2s linear infinite;
  }

  .start-without-account {
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    margin: 1rem 0 0 0;
    color: var(--imperial-red);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    button {
      width: 80%;
    }
  }
`;
