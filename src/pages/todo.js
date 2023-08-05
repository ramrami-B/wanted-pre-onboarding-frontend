import { useEffect } from "react";

export function ToDo() {
  useEffect(() => {
    if (!localStorage.getItem("access_token")) window.location.href = "/signin";
  }, []);
  return (
    <div>
      <h1>TODO</h1>
    </div>
  );
}
