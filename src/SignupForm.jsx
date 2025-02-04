import { useState } from "react";

const SignupForm = ({ users, setUsers, addUser }) => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
    password: "",
  });

  const { address, email, mobile, name, password } = user;

  // 1. onChange => 5가지의 인풋에 반응할 수 잇는 함수 만들기 각각의 인풋의 값을 변경할 때마다 해당하는 값만 변경할 수 있는 함수를 만드세요.
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    // 객체[]는 객체 안의 값을 접근하는 방법
    // 예 ) user['name'] = user.name
  };

  // 2. onSubmit라는 함수를 만들고 동일한 유저가 있는지 검사 후 없으면 추가할 준비가 됨. console.log(props)
  const onSubmit = () => {
    // early return 예외처리
    if (email.length === 0) {
      return alert("email ㄱㄱ");
    }
    if (password.length === 0) {
      return alert("password ㄱㄱ");
    }
    if (name.length === 0) {
      return alert("name ㄱㄱ");
    }
    if (mobile.length === 0) {
      return alert("mobile ㄱㄱ");
    }
    if (address.length === 0) {
      return alert("address ㄱㄱ");
    }

    // 중복된 유저 검사
    // const index = users.findIndex((person) => person.email === user.email && person.mobile === user.mobile)
    // if (index >= 0) {
    //   return alert("이미 가입됨 ㄴㄴ")
    // }

    const found = users.find(
      (person) => person.email === user.email && person.mobile === user.mobile
    );
    if (found) {
      return alert("이미 가입됨 ㄴㄴ");
    }
    // 회원탈퇴
    // 회원이 있는지 검사
    // if ( ! found ){ } //  변수앞에 ! 를 붙여서 undefined를 표현

    // addUser(user).then((res) => alert(res))
    setUsers((prev) => [...prev, user]);
    alert("유저가 추가되었습니다.");
  };

  // 3. 유저 검사 후 동일한 유저가 없으면 추가하기

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input type="text" value={email} onChange={onChange} name="email" />
      <input
        type="password"
        value={password}
        onChange={onChange}
        name="password"
      />
      <input type="text" value={mobile} onChange={onChange} name="mobile" />
      <input type="text" value={name} onChange={onChange} name="name" />
      <input type="text" value={address} onChange={onChange} name="address" />

      <button>ADD</button>
    </form>
  );
};

export default SignupForm;
