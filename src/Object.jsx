// React의 useState 훅을 import합니다.
import { useState } from "react";
// SignupForm 컴포넌트를 import합니다. 이 컴포넌트는 다른 파일에서 정의되어 있을 것입니다.
import SignupForm from "./SignupForm";

const Object = () => {
  // signinProps 상태를 초기화합니다. 이메일, 비밀번호, 이름을 관리합니다.
  const [signinProps, setSigninProps] = useState({
    email: "", // 이메일 상태는 빈 문자열로 초기화
    password: "", // 비밀번호 상태는 빈 문자열로 초기화
    name: "", // 이름 상태는 빈 문자열로 초기화
  });

  // 입력 필드의 변화가 있을 때마다 호출되는 함수입니다.
  const onChange = (e) => {
    // 입력된 값에서 name과 value를 추출합니다.
    const { name, value } = e.target;
    // // destructuring을 사용하지 않으면 이렇게 작성할 수도 있습니다.
    // const name = e.target.name;
    // const value = e.target.value;

    // 현재 state 값을 콘솔에 출력 (디버깅 용도)
    console.log(signinProps[name]);

    // 상태를 업데이트합니다. prev는 기존 상태이고, [name]: value로 해당 필드만 업데이트
    setSigninProps((prev) => ({ ...prev, [name]: value }));
  };

  // 이름 리스트를 관리하는 상태입니다.
  const [array, setArray] = useState(["이형진", "오윤환", "서준성", "양영탁"]);

  // ADD 버튼을 클릭했을 때 호출되는 함수입니다.
  const onSubmit = () => {
    // 이름이 비어있으면 alert을 띄웁니다.
    if (signinProps.name.length === 0) {
      return alert("이름을 입력해주세요."); // "이름을 입력해주세요."
    }

    // 이름을 기존 배열에 추가합니다.
    setArray((prev) => {
      let copy = [...prev, signinProps.name]; // 새로운 배열을 만들어서 기존 배열에 이름을 추가

      console.log(copy); // 새로운 배열을 콘솔에 출력
      return copy; // 새로운 배열을 반환
    });

    // 혹은 아래처럼 한 줄로도 작성할 수 있습니다.
    // setArray(prev => [ ...prev, signinProps.name ])
  };

  // DELETE 버튼을 클릭했을 때 호출되는 함수입니다.
  const onDelete = () => {
    // signinProps에서 이름을 추출합니다.
    const { name } = signinProps;

    // 이름이 비어있으면 alert을 띄웁니다.
    if (name.length === 0) {
      return alert("이름 입력 ㄱㄱ"); // "이름 입력 ㄱㄱ" (이름 입력을 요구하는 메시지)
    }

    // 배열에서 이름의 인덱스를 찾습니다.
    const index = array.findIndex((person) => person === name);

    // 이름이 배열에 존재하지 않으면 존재하지 않는다고 alert을 띄웁니다.
    if (index < 0) {
      return alert("존재ㄴㄴ"); // "존재하지 않음" 메시지
    }

    // 삭제할 이름을 콘솔에 출력 (디버깅 용도)
    console.log(array[index]);

    // 배열에서 해당 이름을 삭제합니다.
    setArray((prev) => {
      let copy = prev.filter((person) => person !== name); // 해당 이름을 제외한 새로운 배열을 만듬

      console.log(copy); // 새로운 배열을 콘솔에 출력
      return copy; // 새로운 배열을 반환
    });

    // 혹은 아래처럼 한 줄로도 작성할 수 있습니다.
    // setArray(prev => prev.filter(person => person !== name))
  };

  // users 배열을 관리하는 상태입니다. 여러 사용자 정보를 담고 있습니다.
  const [users, setUsers] = useState([
    {
      name: "서준성", // 사용자 이름
      address: "대전 중구", // 사용자 주소
      mobile: "01012341234", // 사용자 모바일 번호
      password: "123123", // 사용자 비밀번호
      email: "sjs@dw.com", // 사용자 이메일
    },
    {
      name: "양영탁",
      address: "울산",
      mobile: "01012341233",
      password: "123123",
      email: "yyt@dw.com",
    },
  ]);

  // 새로운 사용자를 추가하는 비동기 함수입니다.
  const addUser = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 새로운 사용자를 기존 사용자 배열에 추가
        setUsers((prev) => [...prev, user]);

        // 성공적으로 추가되었다는 메시지
        resolve("회원가입 되었습니다.");
      }, 1000); // 1초 후에 실행되도록 설정 (네트워크 요청을 시뮬레이션)
    });

  return (
    <div>
      <h1>Object</h1>

      {/* 이메일, 비밀번호, 이름을 입력하는 필드들 */}
      <input
        type="text"
        value={signinProps.email} // 이메일 상태 값 바인딩
        onChange={onChange} // 입력이 변경될 때마다 onChange 함수 호출
        name="email" // 이름은 email로 지정
      />
      <input
        type="password"
        value={signinProps.password} // 비밀번호 상태 값 바인딩
        onChange={onChange} // 입력이 변경될 때마다 onChange 함수 호출
        name="password" // 이름은 password로 지정
      />
      <input
        type="text"
        value={signinProps.name} // 이름 상태 값 바인딩
        onChange={onChange} // 입력이 변경될 때마다 onChange 함수 호출
        name="name" // 이름은 name으로 지정
      />

      {/* ADD 버튼 클릭 시 onSubmit 함수 실행 */}
      <button onClick={onSubmit}>ADD</button>

      {/* DELETE 버튼 클릭 시 onDelete 함수 실행 */}
      <button onClick={onDelete}>DELETE</button>

      <SignupForm users={users} setUsers={setUsers} addUser={addUser} />
    </div>
  );
};

export default Object;
