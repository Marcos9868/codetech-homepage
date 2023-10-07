import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 8.5rem;
  background-color: #f7f8f5;
  border: 2px solid red;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerSocialMedia = styled.section`
  width: 100%;
  height: 50%;
  justify-self: flex-start;
`;

export const SocialMedia = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;