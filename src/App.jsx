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
<<<<<<< HEAD
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
=======
    console.log(todos);
  }, [todos]);
>>>>>>> 85820312b006fe387f36f93f8626b6d9c25bac61

  return (
    <div>
      <h1>App</h1>
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 85820312b006fe387f36f93f8626b6d9c25bac61
    </div>
  );
};

export default App;
