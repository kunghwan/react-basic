import { useState } from "react";

const RemindObject = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });

  const onChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    console.log(user[name]);

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const [array, setArray] = useState(["서준성", "이형진", "양영탁", "오윤환"]);

  const onSubmit = () => {
    if (user.name.length === 0) {
      return alert("이름입력 ㄱㄱ");
    }
    setArray((prev) => {
      let copy = [...prev, user.name];
      console.log(copy);
      return copy;
    });

    // setArray((prev) => [...prev, user.name]);
  };

  const onDelete = () => {
    const { name } = user;

    if (name.length === 0) {
      return alert("이름입력 ㄱㄱ");
    }

    const index = array.findIndex((person) => person === name);

    if (index < 0) {
      return alert("중복인데 ");
    }

    console.log(array[index]);

    setArray((prev) => {
      let copy = prev.filter((person) => person !== name); // 해당 이름을 제외한 새로운 배열을 만듬

      console.log(copy); // 새로운 배열을 콘솔에 출력
      return copy; // 새로운 배열을 반환
    });
    // setArray((prev) => prev.filter((item) => item !== name));
  };

  return (
    <div>
      <h1>object</h1>
      <input type="text" value={user.email} onChange={onChange} name="email" />
      <input type="text" value={user.name} onChange={onChange} name="name" />

      <input
        type="password"
        value={user.password}
        onChange={onChange}
        name="password"
      />
      <button onClick={onSubmit}>add</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default RemindObject;
