import { styled } from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NewTodoDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NewTodoInput = styled.input`
  width: 60%;
  padding: 0.5em;
`;

export const NewTodoButton = styled.button`
  width: 30%;
  padding: 0.5em;
`;

export const Li = styled.li`
  list-style: none;
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const TodoLabel = styled.label`
  margin: 0.5em 0.1em;
`;

export const CheckBox = styled.input`
  padding: 0.2em;
`;
