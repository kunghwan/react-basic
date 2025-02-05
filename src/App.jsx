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

  return (
    <div>
      <h1>App</h1>
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
    </div>
  );
};

export default App;
