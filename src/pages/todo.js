import * as S from "../assets/todo.style";
import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../service/todo.service";

export function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [modifiedTodo, setModifiedTodo] = useState("");
  const [isTodoChange, setIsTodoChange] = useState(false);
  const [isEditModeIdx, setIsEditModeIdx] = useState(-1);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) window.location.href = "/signin";
  }, []);

  useEffect(() => {
    getTodo().then((datas) => {
      setTodos(Object.values(datas));
      setIsTodoChange(false);
    });
  }, [isTodoChange]);

  function onChangeNewTodo(e) {
    setTodo(e.target.value);
  }

  function addNewTodo() {
    createTodo({ id: 1, todo: todo, isCompleted: false, userId: 1 });
    setIsTodoChange(true);
    setTodo("");
  }

  function onChangeModifyTodo(e) {
    setModifiedTodo(e.target.value);
  }

  function onCheckBoxClicked(e, data) {
    updateTodo(data.id, {
      todo: data.todo,
      isCompleted: e.target.checked,
    });
    setIsTodoChange(true);
  }

  function onClickSubmitButton(e, data) {
    updateTodo(data.id, {
      todo: modifiedTodo,
      isCompleted: data.isCompleted,
    });
    setIsTodoChange(true);
    setIsEditModeIdx(-1);
  }

  function onClickDeleteButton(e, id) {
    deleteTodo(id);
    setIsTodoChange(true);
  }

  function onClickCancelButton() {
    setIsEditModeIdx(-1);
  }

  // Component
  const DoubleButton = (props) => {
    return (
      <S.ButtonsDiv>
        <S.Button
          data-testid={props.testIdList[0]}
          onClick={(e) => props.onClickList[0](e, props.paramList[0])}
        >
          {props.textList[0]}
        </S.Button>
        <S.Button
          data-testid={props.testIdList[1]}
          onClick={(e) => props.onClickList[1](e, props.paramList[1])}
        >
          {props.textList[1]}
        </S.Button>
      </S.ButtonsDiv>
    );
  };

  return (
    <S.Layout>
      <S.NewTodoDiv>
        <S.TodoInput
          data-testid="new-todo-input"
          onChange={onChangeNewTodo}
          value={todo}
        />
        <S.NewTodoAddButton
          data-testid="new-todo-add-button"
          onClick={addNewTodo}
        >
          추가
        </S.NewTodoAddButton>
      </S.NewTodoDiv>

      {/* TODO LIST */}
      {todos.map((data, idx) => {
        function onClickModifyButton(e, idx) {
          setIsEditModeIdx(idx);
        }
        return (
          <S.Li key={idx}>
            <S.TodoLabel>
              <S.CheckBox
                type="checkbox"
                onClick={(e) => onCheckBoxClicked(e, data)}
                defaultChecked={data.isCompleted ? true : false}
              />
              {idx === isEditModeIdx ? (
                <S.TodoInput
                  data-testid="modify-input"
                  onChange={onChangeModifyTodo}
                ></S.TodoInput>
              ) : (
                <span>{data.todo}</span>
              )}
            </S.TodoLabel>
            {idx === isEditModeIdx ? (
              <DoubleButton
                textList={["제출", "취소"]}
                testIdList={["submit-button", "cancel-button"]}
                onClickList={[onClickSubmitButton, onClickCancelButton]}
                paramList={[data, null]}
              />
            ) : (
              <DoubleButton
                textList={["수정", "삭제"]}
                testIdList={["modify-button", "delete-button"]}
                onClickList={[onClickModifyButton, onClickDeleteButton]}
                paramList={[idx, data.id]}
              />
            )}
          </S.Li>
        );
      })}
    </S.Layout>
  );
}
