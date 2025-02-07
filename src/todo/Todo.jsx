import { useState, useRef } from "react";
import { fetchList, store, deleteItem } from "./database";

const Todo = () => {
  const [arrays, setArrays] = useState(fetchList() ?? []);

  const [text, setText] = useState("");

  const inputref = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      inputref.current.focus();
      return alert("입력해");
    }
    if (text.length < 2) {
      return alert("2글자 이상 입력");
    }

    const index = arrays.findIndex((item) => item === text);
    if (index !== -1) {
      alert("중복");
      setText("");
      inputref.current.focus();
      return;
    }

    store(text)
      .catch((error) => alert(error))
      .then((response) => {
        console.log(response);
        setArrays((prev) => [...prev, text]);
        alert("성공");
        inputref.current.focus();
        setText("");
      });
  };

  const onDelete = (item) => {
    deleteItem(item)
      .catch((error) => alert(error))
      .then((response) => {
        console.log(response);
        setArrays((prev) => prev.filter((it) => it !== item));
      });
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputref}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>add</button>
        <ul>
          {arrays.map((item, i) => {
            return (
              <li key={i}>
                {item}
                <button onClick={() => onDelete(item)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default Todo;
