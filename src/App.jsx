import PropTypes from "prop-types"; // PropTypes만 사용
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "Study more", "Cleaning"]);

  return (
    <div>
      <h1> App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />

      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo}
            index={index}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </div>
  );
};

export default App;

const TodoItem = ({ todo, index, setTodos, todos }) => {
  const onDelete = () => {
    setTodos((prev) => prev.filter((item) => item !== todo));
    alert("삭제되었습니다");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          columnGap: 10,
        }}
      >
        <p>
          {index + 1}.{todo}
        </p>
        <button onClick={onDelete}>삭제</button>
      </div>
      <TodoForm setTodos={setTodos} todos={todos} isUpdate payload={todo} />
    </>
  );
};

// PropTypes 수정: todos는 배열로 전달되어야 함.
TodoItem.propTypes = {
  todo: PropTypes.string,
  index: PropTypes.number,
  setTodos: PropTypes.func,
  todos: PropTypes.array, // todos는 배열이어야 함
};

const TodoForm = ({ todos, setTodos, isUpdate, payload }) => {
  const [input, setInput] = useState(payload ?? "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input.length === 0) {
          return alert("type todos");
        }

        const foundIndex = todos.findIndex((item) => {
          if (!isUpdate) {
            return item === input && item; // 오류 수정: 비트 연산자(&)에서 논리 연산자(&&)로 변경
          }
          return item === payload && item;
        });
        if (foundIndex >= 0) {
          return alert("추가");
        }
        if (isUpdate && foundIndex < 0) {
          return alert("아이템없음");
        }

        setTodos((prev) => {
          let copy = [...prev];

          if (!isUpdate) {
            copy.unshift(input);
          } else {
            copy[foundIndex] = input;
          }

          return copy; // 상태 업데이트 함수에 값을 반환해야 제대로 작동
        });

        alert("");
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>{isUpdate ? "수정" : "추가"}</button>
    </form>
  );
};

// PropTypes 수정: todos는 배열이어야 하며, setTodos는 함수
TodoForm.propTypes = {
  todos: PropTypes.array.isRequired, // todos는 배열이어야 함
  setTodos: PropTypes.func.isRequired, // setTodos는 함수여야 함
  isUpdate: PropTypes.bool,
  payload: PropTypes.string,
};
