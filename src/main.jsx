import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
<<<<<<< HEAD
import Verify from "./Verify.jsx";
import Timer from "./Timer.jsx";
import Code from "./Code.jsx";
=======
import Todo from "./todo/Todo.jsx";
>>>>>>> 85820312b006fe387f36f93f8626b6d9c25bac61

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
<<<<<<< HEAD
    {/* <Verify /> */}
    <>
      <Timer />
      <Code />
    </>
=======
    <Todo />
>>>>>>> 85820312b006fe387f36f93f8626b6d9c25bac61
  </StrictMode>
);
