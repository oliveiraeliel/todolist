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
  width: 40%;
  height: 90%;
  background-color: #8edce65f;
  border-radius: 20px;
  align-items: center;

  @media (max-width: 750px) {
    width: 90%;
  }

  .title {
    flex: 1;
  }
`;

export const InputPlace = styled.div`
  flex: 2;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  width: 90%;
`;
