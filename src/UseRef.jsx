import { useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState("");

  const inputref = useRef(null);
  const onClick = () => {
    if (value.length === 0) {
      alert("아무것도 입력하지 않았습니다");
      inputref.current.focus();
      return;
    }
  };
  return (
    <div>
      <input
        type="text"
        ref={inputref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default UseRef;
