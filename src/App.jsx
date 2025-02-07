// 1. react에서 useState, useEffect, useRef 꺼내오기

import { useState, useEffect, useRef } from "react";

// 2. initialState 라는 이름으로 빈 배열 만들기

const initialState = [];

const App = () => {
  // 3. useState를 사용해서 todos 선언하고 초기값으로 initialState 넣기
  const [todos, setTodos] = useState(initialState);

  // 4. useState로 todo 선언하고 초기값은 빈 문자열
  const [todo, setTodo] = useState("");

  const inputref = useRef(null);

  // 6. onSubmit 이라는 이름의 함수를 만드세요.

  const onSubmit = (e) => {
    e.preventDefault();
    // 6-2. todo 값 입력되지 않았을 떄 예외처리
    //  예외처리 경고 + (인풋창 포커스)
    if (todo.length === 0) {
      inputref?.current.focus();
      return alert("입력해줘");
    }
    if (todo.length <= 1) {
      return alert("1글자도 안됨");
    }
    setTodos((prev) => [...prev, todo]);
    setTodo("");
    // set함수는 무조건 원래의 값과 같은 탑입을 return해줘야함
    // 6-3. todo값이 1글자 이하일 떄에도 예외처리
    // 6-4 setTodo함수를 사용해서 todo 값을 todos에 추가하기
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>App</h1>
      {/* 5.form 만들고 안에 input, button 넣기 
      
      5-2. input에 todo 연결하기 value, onChange

      5-3 form태그에서 onSubmit 속성에 e 를 가져와 e.preventDefault() 라는 새로고침 방지하기
      
      */}

      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={inputref}
        />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((to) => {
          const onDelete = () =>
            setTodos((prev) => prev.filter((item) => item !== to));

          // setTodos((prev) => {
          //     // let copy = [...prev];
          // // copy.splice(index, 1);
          // // return copy;\

          // });

          return (
            <li key={to}>
              {to}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
