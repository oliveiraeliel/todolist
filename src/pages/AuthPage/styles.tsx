import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;
  width: fit-content;
  height: 90%;
  background: rgba(142, 220, 230, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(142, 220, 230, 1);
  align-items: center;

  @media (max-width: 750px) {
    width: 90%;
  }

  .title {
    flex: 1;
  }
`;

export const InputPlace = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 90%;

  button {
    width: 100%;
  }

  .bottom-text {
    text-align: center;
    text-decoration: none;
    color: var(--imperial-red);
    font-weight: 600;
  }
`;
