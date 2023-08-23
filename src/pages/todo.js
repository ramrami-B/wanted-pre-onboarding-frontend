import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../service/todo.service";
import DoubleButton from "../component/DoubleButton";
import { styled } from "styled-components";
import Button from "../component/Button";
import CheckBox from "../component/CheckBox";

export function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [isTodoChange, setIsTodoChange] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    !localStorage.getItem("access_token") && window.location.href("/signin");
  }, []);

  useEffect(() => {
    getTodo().then((datas) => {
      setTodoData(Object.values(datas));
      setIsTodoChange(false);
    });
  }, [isTodoChange]);

  function onChangeTodo(e) {
    setTodo(e.target.value);
  }

  function addNewTodo() {
    createTodo({ id: 1, todo: todo, isCompleted: false, userId: 1 });
    setIsTodoChange(true);
    setTodo("");
  }

  function onClickCheckBox(e, data) {
    updateTodo(data.id, {
      todo: data.todo,
      isCompleted: e.target.checked,
    });
    setIsTodoChange(true);
  }

  function onClickSubmit(e, data) {
    updateTodo(data.id, {
      todo: todo,
      isCompleted: data.isCompleted,
    });
    setIsTodoChange(true);
    setEditIndex(-1);
  }

  function onClickDelete(e, id) {
    deleteTodo(id);
    setIsTodoChange(true);
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
          value={todo}
        />
        <Button
          testId="new-todo-add-button"
          onClick={addNewTodo}
          disabled={false}
          size={30}
          text="추가"
        ></Button>
      </AddTodoDiv>

      {/* TODO LIST */}
      {todoData.map((data, idx) => {
        function onClickModify(idx) {
          setEditIndex(idx);
        }
        return (
          <Li key={idx}>
            <TodoLabel>
              <CheckBox
                onClick={(e) => onClickCheckBox(e, data)}
                defaultChecked={data.isCompleted ? true : false}
              />
              {idx === editIndex ? (
                <TodoInput
                  data-testid="modify-input"
                  onChange={onChangeTodo}
                ></TodoInput>
              ) : (
                <span>{data.todo}</span>
              )}
            </TodoLabel>

            {idx === editIndex ? (
              <DoubleButton
                textList={["제출", "취소"]}
                testIdList={["submit-button", "cancel-button"]}
                onClickList={[onClickSubmit, onClickCancel]}
                paramList={[data, null]}
              />
            ) : (
              <DoubleButton
                textList={["수정", "삭제"]}
                testIdList={["modify-button", "delete-button"]}
                onClickList={[onClickModify, onClickDelete]}
                paramList={[idx, data.id]}
              />
            )}
          </Li>
        );
      })}
    </Layout>
  );
}

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const AddTodoDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const TodoInput = styled.input`
  width: 60%;
  padding: 0.5em;
`;

const Li = styled.li`
  list-style: none;
  margin: 0.2em auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const TodoLabel = styled.label`
  margin: 0.5em 0.1em;
  width: 70%;
`;
