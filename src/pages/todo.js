import * as S from "../assets/todo.style";
import { useEffect, useState } from "react";
import { createTodo, getTodo } from "../service/todo.service";

export function ToDo() {
  //   const todos = ["TODO 1", "TODO 2"];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) window.location.href = "/signin";
    getTodo().then((datas) => {
      setTodos(Object.values(datas));
    });
  }, []);

  useEffect(() => {
    getTodo().then((datas) => {
      setTodos(Object.values(datas));
    });
  }, [todos]);

  function onChangeTodo(e) {
    setTodo(e.target.value);
  }

  function addNewTodo() {
    createTodo({ id: 1, todo: todo, isCompleted: false, userId: 1 });
  }

  return (
    <S.Layout>
      <S.NewTodoDiv>
        <S.NewTodoInput data-testid="new-todo-input" onChange={onChangeTodo} />
        <S.NewTodoButton data-testid="new-todo-add-button" onClick={addNewTodo}>
          추가
        </S.NewTodoButton>
      </S.NewTodoDiv>
      {todos.map((data, idx) => {
        return (
          <S.Li key={idx}>
            <S.TodoLabel>
              <S.CheckBox type="checkbox" />
              <span>{data.todo}</span>
            </S.TodoLabel>
          </S.Li>
        );
      })}
    </S.Layout>
  );
}
