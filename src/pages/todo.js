import * as S from "../assets/todo.style";
import { useEffect } from "react";

export function ToDo() {
  const todos = ["TODO 1", "TODO 2"];
  useEffect(() => {
    if (!localStorage.getItem("access_token")) window.location.href = "/signin";
  }, []);

  return (
    <S.Layout>
      {todos.map((todo, idx) => {
        return (
          <S.Li key={idx}>
            <label>
              <input type="checkbox" />
              <span>{todo}</span>
            </label>
          </S.Li>
        );
      })}
    </S.Layout>
  );
}
