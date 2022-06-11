import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .start-without-account {
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    margin: 1rem 0 0 0;
    color: var(--imperial-red);
    text-decoration: none;
    
  }
`;

export const Slogan = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin: 3rem 0 15rem 0;
  letter-spacing: 0.2rem;

  span {
    color: var(--secondary-color);
  }

  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;

export const Logo = styled.a`
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
