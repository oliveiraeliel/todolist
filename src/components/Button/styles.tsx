import styled from "styled-components";

export const Body = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  width: 25rem;
  height: 5rem;
  border-radius: 10px;
  background-color: var(--primary-color);
  outline: none;
  border: 3px solid var(--secondary-color);
    @media(max-width: 550px){
        width: 90%;
        font-size: 5vw;
    }
`;
