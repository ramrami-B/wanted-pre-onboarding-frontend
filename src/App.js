import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.getItem("access_token")
      ? (window.location.href = "/todo")
      : (window.location.href = "/signin");
  });
}

export default App;
