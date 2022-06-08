import styled from "styled-components";

export const Letter = styled.a`
  font-weight: 700;
  font-size: 9rem;
  color: var(--primary-color);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--terciary-color);
  letter-spacing: 0.2rem;

  span {
    color: var(--secondary-color);
  }

  @media (max-width: 830px) {
    font-size: 17vw;
  }

`;
