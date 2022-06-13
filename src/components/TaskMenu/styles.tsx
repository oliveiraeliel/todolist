import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80vh;

  .title {
    font-size: 2.6rem;
    font-weight: 300;
    color: var(--terciary-color);
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  height: 90%;
  background: rgba(142, 220, 230, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(142, 220, 230, 1);

  overflow-y: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .item {
    width: inherit;
    margin: 0.5rem;
  }
`;
