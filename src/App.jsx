<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";

const App = () => {
  const [sec, setSec] = useState(0);
  const [counting, setCounting] = useState(false);

  const onPlus = () => {
    setSec((prev) => prev + 1000);
  };
  const onMinus = () => {
    setSec((prev) => prev - 1000);
  };

  const onReset = () => {
    setSec(0);
  };

  useEffect(() => {
    console.log(sec);
  }, [sec]);
  // [] 빈배열은 최초 1회만 실행 해당 컴포넌트가 렌더링 되는 시점

  useEffect(() => {
    if (counting) {
      const count = setInterval(() => {
        setSec((prev) => prev + 10);
      }, 10);

      return () => {
        clearInterval(count);
      };
    }
  }, [counting]);

  useEffect(() => {
    console.log("app has mounted!");
  }, []);

  // 배열을 사용하지 않으면 눈치개코가 됨
  // 모든 것들에 반응하는 흉악한 코드가 될 수 있음
  useEffect(() => {
    console.log("sdfsdfsdfdf");
  });

  // 배열에 우리가 주시하고 싶은 변수/함수를 넣어두면 해당 변수/함수가 업데이트 될 때에만 작동하는 코드를 짤 수 있음.
>>>>>>> caa283e504f66e820c3f060192c55224b89460aa

  return (
    <div>
      <h1>App</h1>
<<<<<<< HEAD
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
=======
      <h3>{sec / 1000}초</h3>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={onReset}>reset</button>
      <button
        onClick={() => {
          setCounting((prev) => !prev);
        }}
      >
        {counting ? "stop" : "start"}
      </button>
>>>>>>> caa283e504f66e820c3f060192c55224b89460aa
    </div>
  );
};

export default App;
