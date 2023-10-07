import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 8.5rem;
  background-color: #121212;
  color: #f5f5f5;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerSocialMedia = styled.section`
  width: 100%;
  height: 40%;
  justify-self: flex-start;
`;

export const SocialMedia = styled.ul`
  display: flex;
  width: 100%;
  height: 80%;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  a {
    gap: 0.4rem;
    list-style: none;
    text-decoration: none;
    outline: none;
    color: #f5f5f5;
    cursor: pointer;
  }
`;