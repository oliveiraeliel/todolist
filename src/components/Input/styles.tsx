import styled from "styled-components";

export const InputBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    size: 1.4rem;
    margin: 1rem 0 0.5rem 0;
    font-weight: 500;
  }
`;

export const InputBox = styled.input`
  width: auto;
  height: 35px;
  outline: none;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
`;
