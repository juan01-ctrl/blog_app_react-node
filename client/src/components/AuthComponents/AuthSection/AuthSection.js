import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  widht: 100%;
  padding:6em 4em;
  min-height: 100vh ;
`;

export const AuthTitle = styled.h1`
  font-size: 4em;
  margin-bottom: 0.5em;
`;

export const AuthFormWrapper = styled.div`
  padding: 2em 3em;
  border-radius: 1em;
  background-color: #f0ebeb;
  width: 28em;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
