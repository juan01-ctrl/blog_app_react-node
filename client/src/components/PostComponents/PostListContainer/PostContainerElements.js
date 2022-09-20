import styled from "styled-components";

export const PostListTitle = styled.h2`
  font-size: 5em;
  text-align: center;
  margin-bottom: 0.5em;
  color: #fff;
`;
export const InputSearch = styled.input`
  border: 1px solid #b3b3b3;
  padding: 0.7em 1em;
  display: block;
  margin: 0em auto;
  margin-bottom: 1.5em;
  width: 100%;
  max-width: 25em;
  font-size: 1.1em;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export const PostList = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1.5em;
  flex-wrap: wrap;
  margin-top: 3em;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin: 1em 0;
`;

export const SelectFilter = styled.select`
  padding: 0.8em;
  font-size: 1.2em;
  background-color: #1f1e1c;
  color: #fff;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;
