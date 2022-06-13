import styled from "styled-components";

export const Body = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem 0 5rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 100vw; */
`;

export const TasksMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 10rem;
  height: 5rem;
  /* height: 80vh; */
`;

export const CompletedMenu = styled.div`
  flex: 1;
`;
