import styled from "styled-components";

export const InputBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    size: 1.4rem;
    margin: 1rem 0 0.5rem 0;
    align-items: flex-start;
  }
`;

export const InputBox = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  outline: none;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
  align-items: center;
`;
