import * as S from "../assets/todo.style";
import { useEffect, useState } from "react";
import { createTodo, getTodo, updateTodo } from "../service/todo.service";

export function ToDo() {
  //   const todos = ["TODO 1", "TODO 2"];
  const [isTodoChange, setIsTodoChange] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) window.location.href = "/signin";
  }, []);

  useEffect(() => {
    getTodo().then((datas) => {
      setTodos(Object.values(datas));
    });
  }, [isTodoChange]);

  function onChangeTodo(e) {
    setTodo(e.target.value);
  }

  function onCheckBoxClicked(e, data) {
    updateTodo(data.id, {
      todo: data.todo,
      isCompleted: e.target.checked,
    });
    setIsTodoChange(true);
  }

  function addNewTodo() {
    createTodo({ id: 1, todo: todo, isCompleted: false, userId: 1 });
    setIsTodoChange(true);
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
              <S.CheckBox
                type="checkbox"
                onClick={(e) => onCheckBoxClicked(e, data)}
                defaultChecked={data.isCompleted ? true : false}
              />
              <span>{data.todo}</span>
            </S.TodoLabel>
          </S.Li>
        );
      })}
    </S.Layout>
  );
}
