import { useState } from "react";
import SignupForm from "./SignupForm";

const Object = () => {
  const a = {};
  const b = [];

  console.log(typeof a, typeof b);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [signinProps, setSigninProps] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;

    setSigninProps((prev) => ({ ...prev, [name]: value }));

    console.log(e.target.value, e.target.name);
  };

  const [array, setArray] = useState(["이형진", "서준성", "양영탁", "요한"]);

  const onSubmit = () => {
    if (signinProps.name.length === 0) {
      return alert("이름을 입력해주세요");
    }
    setArray((prev) => {
      let copy = [...prev, signinProps.name];

      console.log(copy);
      return copy;

      //   return [...prev, signinProps.name];
      //
    });
    // console.log(array, signinProps.name);
  };

  const onDelete = () => {
    const { name } = signinProps;
    if (name.length === 0) {
      return alert("이름 입력 ㄱㄱ");
    }

    const index = array.findIndex((person) => person === name);
    if (index < 0) {
      return alert("존재 ㄴㄴ");
    }

    console.log(array[index]);

    // setArray((prev) => {
    //   let copy = [...prev];
    //   copy.splice(index, 1);

    //   console.log(copy);
    //   return copy;
    // });

    setArray((prev) => {
      let copy = prev.filter((person) => person !== name);

      console.log(copy);
      return copy;
    });

    // setArray(prev => prev.filter(person => person !== name))
  };

  const [users, setUsers] = useState([
    {
      name: "서준성",
      address: "대전 중구",
      moblie: "454645465",
      password: "2131212",
      email: "sdfsdfsdf",
    },
    {
      name: "양영탁",
      address: "울산",
      moblie: "454645465",
      password: "2131212",
      email: "sdfsdfsdf",
    },
  ]);

  const addUser = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setUsers((prev) => [...prev, user]);

        resolve("회원가입되었습니다");
      }, 1000);
    });

  return (
    <div>
      <h1>Object</h1>
      <input
        type="text"
        value={signinProps.email}
        // onChange={(e) =>
        //   setSigninProps((prev) => ({ ...prev, email: e.target.value }))
        // }
        // return없이 내뱉을 때는 괄호안에 중괄호를 쓴다
        // callback 함수를 사용해서 객체를 return 할때 한줄로 작성하고 싶다면 return없애고 () 안에 {}를 사용한 뒤 객체 입력하면 됨
        onChange={onChange}
        name="email"
      />
      <input
        type="password"
        value={signinProps.password}
        onChange={onChange}
        name="password"
        // onChange={(e) =>
        //   setSigninProps((prev) => ({ ...prev, password: e.target.value }))
        // }
      />
      <input
        type="text"
        value={signinProps.name}
        onChange={onChange}
        name="name"
      />
      <button onClick={onSubmit}>ADD</button>
      <button onClick={onDelete}>삭제</button>

      <h1>SignupForm</h1>
      <SignupForm users={users} setUsers={setUsers} addUser={addUser} />
    </div>
  );
};

export default Object;
