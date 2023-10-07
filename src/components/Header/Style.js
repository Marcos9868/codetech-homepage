import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5.5rem;
  background-color: #f7f8f5;
  border: 2px solid red;
  justify-content: space-around;
  align-items: center;
`;


export const ContainerLogo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 6.5rem;
  height: 5.5rem;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  outline: none;
  text-decoration: none;
  gap: 2.5rem;
`;