import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Verify from "./Verify.jsx";
import Timer from "./Timer.jsx";
import Code from "./Code.jsx";
import RemindTodo from "./todo/RemindTodo.jsx";
import Todo from "./todo/Todo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Verify /> */}
    <>
      {/* <Timer />
      <Code /> */}
    </>
    <Todo />
    <RemindTodo />
  </StrictMode>
);
