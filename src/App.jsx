import { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const ref = useRef(null); //

  const inputRef = useRef(null);

  const valueRef = useRef(0); //
  // ref = 안보이는 곳에서 열일 하는 친구// 한 발 느린 친구
  // 과제 제출할 때까지 아무것도 안하는 척 하다가 과제제출 칼같이 지키는 타입

  const valueCheck = () => {
    // 1.  value 가 입력되지 않았을 때 alert
    if (value.length === 0) {
      alert("아무것도 입력되지 않았습니다.");

      // 이렇게 까지 했는데도 유저가 아무것도 적지않고 계속 버튼만 누를 때
      inputRef.current?.focus();
      return;
      // const input = document.querySelector("input#myInput");
      // input.focus();
      // return;
    }

    if (ref.current?.value.length === 0) {
      alert("아무것도 선택하지 않았습니다.");

      ref.current?.showPicker();

      return;
    }

    alert(`you just typed: ${value}`);
    const length = value.length;
    valueRef.current = length;
  };

  useEffect(() => {
    console.log({ value });
  }, [value]);

  return (
    <div>
      <h1>React Tutorial: {valueRef.current}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <select name="" id="" ref={ref}>
        <option value="">a</option>
        <option value="">b</option>
      </select>
      <button onClick={valueCheck}>value check</button>
    </div>
  );
};

export default App;
