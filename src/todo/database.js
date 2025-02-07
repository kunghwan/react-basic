const database = localStorage;

export const store = (item) =>
  new Promise((resolve, reject) => {
    if (item.length === 0) {
      return reject("아무것도 입력하지 않았습니다.");
    }
    let list = [];
    const data = database.getItem("arrays");
    if (data) {
      list = JSON.parse(data);
    }
    list.unshift(item);

    database.setItem("arrays", JSON.stringify(list));

    return resolve("성공");
  });

export const fetchList = () => {
  const data = database.getItem("arrays");
  if (!data) {
    return [];
  }

  const realData = JSON.parse(data);
  return realData ?? [];
  //   ??는 앞에꺼없으면 안전방으로 대괄호 보내기
};

export const deleteItem = (item) =>
  new Promise((resolve, reject) => {
    let list = [];
    const data = database.getItem("arrays");
    if (!data) {
      return reject("목록이 존재하지 않습니다.");
    }
    list = JSON.parse(data);

    list = list.filter((i) => i !== item);

    database.setItem("arrays", JSON.stringify(list));

    return resolve("성공");
  });
