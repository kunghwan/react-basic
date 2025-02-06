// 1. react에서 useState, useEffect, useRef 꺼내오기

import { useState, useEffect, useRef } from "react";

// 2. initialState 라는 이름으로 빈 배열 만들기

const initialState = [];

const App = () => {
  // 3. useState를 사용해서 todos 선언하고 초기값으로 initialState 넣기
  const [todos, setTodos] = useState(initialState);

  // 4. useState로 todo 선언하고 초기값은 빈 문자열
  const [todo, setTodo] = useState("");

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div>
      <h1>App</h1>
      {/* 5.form 만들고 안에 input, button 넣기 
      
      5-2. input에 todo 연결하기 value, onChange

      5-3 form태그에서 onSubmit 속성에 e 를 가져와 e.preventDefault() 라는 새로고침 방지하기
      
      */}

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button></button>
      </form>
    </div>
  );
};

export default App;
