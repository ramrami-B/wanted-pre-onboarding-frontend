import { styled } from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const NewTodoDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const TodoInput = styled.input`
  width: 60%;
  padding: 0.5em;
`;

export const NewTodoAddButton = styled.button`
  width: 30%;
  padding: 0.5em;
`;

export const Li = styled.li`
  list-style: none;
  margin: 0.2em auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const TodoLabel = styled.label`
  margin: 0.5em 0.1em;
  width: 70%;
`;

export const CheckBox = styled.input`
  padding: 0.2em;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;

export const Button = styled.button`
  width: 50%;
  padding: 0.1em;
`;
