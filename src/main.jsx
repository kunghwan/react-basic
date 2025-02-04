import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Object from "./Object.jsx";
import RemindObject from "./RemindObject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Object />
    <RemindObject />
  </StrictMode>
);
