import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodo,
  initInput,
  updateTodo,
} from "../service/todo.service";
import { styled } from "styled-components";
import Button from "../component/Button";
import TodoList from "../component/TodoList";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    if(!localStorage.getItem("access_token")) window.location.href = "/signin";
    updateTodoState();
  }, []);

  useEffect(() => {
    updateTodoState();

    // console.log(todoData);
  }, [todoData]);

  function updateTodoState() {
    getTodo().then((datas) => {
      setTodoData(Object.values(datas));
    });
  }

  function onChangeTodo(e) {
    setTodo(e.target.value);
  }

  function addNewTodo() {
    createTodo({ id: 1, todo: todo, isCompleted: false, userId: 1 });
    initInput();
    setTodo("");
    updateTodoState();
  }

  function onClickCheckBox(e, data) {
    updateTodo(data.id, {
      todo: data.todo,
      isCompleted: e.target.checked,
    });
    updateTodoState();
  }

  function onClickSubmit(e, data) {
    updateTodo(data.id, {
      todo: todo,
      isCompleted: data.isCompleted,
    });
    initInput();
    setTodo("");
    updateTodoState();
    setEditIndex(-1);
  }

  function onClickDelete(e, id) {
    deleteTodo(id);
    updateTodoState();
  }

  function onClickCancel() {
    setEditIndex(-1);
  }

  return (
    <Layout>
      <AddTodoDiv>
        <TodoInput
          data-testid="new-todo-input"
          onChange={onChangeTodo}
          id="new-todo-input"
        />
        <Button
          testId="new-todo-add-button"
          onClick={addNewTodo}
          disabled={false}
          text="추가"
          height={3.125}
        ></Button>
      </AddTodoDiv>

      {/* TODO LIST */}
      <TodoList
        dataList={todoData}
        setEditIndex={setEditIndex}
        editIndex={editIndex}
        onClickCheckBox={onClickCheckBox}
        onChangeTodo={onChangeTodo}
        onClickSubmit={onClickSubmit}
        onClickCancel={onClickCancel}
        onClickDelete={onClickDelete}
      />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const AddTodoDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const TodoInput = styled.input`
  width: 180%;
  padding: 0.5em;
  margin-right: 0.5rem;
  border: none;
`;
