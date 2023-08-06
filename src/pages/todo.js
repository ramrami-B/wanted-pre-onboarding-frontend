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
    });
  }, [isTodoChange]);

  function onChangeNewTodo(e) {
    setTodo(e.target.value);
  }

  function onChangeModifyTodo(e) {
    setModifiedTodo(e.target.value);
  }

  function onCheckBoxClicked(e, data) {
    updateTodo(data.id, {
      todo: data.todo,
      isCompleted: e.target.checked,
    });
    setIsTodoChange(!isTodoChange);
  }

  function onClickSubmitButton(e, data) {
    updateTodo(data.id, {
      todo: modifiedTodo,
      isCompleted: data.isCompleted,
    });
    setIsTodoChange(!isTodoChange);
    setIsEditModeIdx(-1);
  }

  function addNewTodo() {
    createTodo({ id: 1, todo: todo, isCompleted: false, userId: 1 });
    setIsTodoChange(!isTodoChange);
  }

  function onClickDeleteButton(e, id) {
    deleteTodo(id);
    setIsTodoChange(!isTodoChange);
  }

  function onClickCancelButton() {
    setIsEditModeIdx(-1);
  }

  return (
    <S.Layout>
      <S.NewTodoDiv>
        <S.NewTodoInput
          data-testid="new-todo-input"
          onChange={onChangeNewTodo}
        />
        <S.NewTodoAddButton
          data-testid="new-todo-add-button"
          onClick={addNewTodo}
        >
          추가
        </S.NewTodoAddButton>
      </S.NewTodoDiv>
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
                <input
                  data-testid="modify-input"
                  onChange={onChangeModifyTodo}
                ></input>
              ) : (
                <span>{data.todo}</span>
              )}
            </S.TodoLabel>
            {idx === isEditModeIdx ? (
              <S.ButtonsDiv>
                <S.Button
                  data-testid="submit-button"
                  onClick={(e) => onClickSubmitButton(e, data)}
                >
                  제출
                </S.Button>
                <S.Button
                  data-testid="cancel-button"
                  onClick={onClickCancelButton}
                >
                  취소
                </S.Button>
              </S.ButtonsDiv>
            ) : (
              <S.ButtonsDiv>
                <S.Button
                  data-testid="modify-button"
                  onClick={(e) => onClickModifyButton(e, idx)}
                >
                  수정
                </S.Button>
                <S.Button
                  data-testid="delete-button"
                  onClick={(e) => onClickDeleteButton(e, data.id)}
                >
                  삭제
                </S.Button>
              </S.ButtonsDiv>
            )}
          </S.Li>
        );
      })}
    </S.Layout>
  );
}
