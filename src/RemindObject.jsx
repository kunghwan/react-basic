import { useState } from "react";

const RemindObject = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const [array, setArray] = useState(["일", "이", "삼", "사"]);
  const onSubmit = () => {
    if (user.name.length === 0) {
      return alert("이름 입력");
    }

    setArray((prev) => {
      [...prev, user.name];
    });
  };
  const onDelete = () => {
    if (user.name.length === 0) {
      return alert("이름 입력");
    }

    const index = user.findIndex((person) => person === user.name);

    if (index < 0) {
      return alert("중복임");
    }

    console.log(array[index]);

    setArray((prev) => {
      let copy = prev.filter((person) => person !== user.name);
      console.log(copy); // 새로운 배열을 콘솔에 출력
      return copy;
    });
  };
  return (
    <div>
      <h1>Object</h1>
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
