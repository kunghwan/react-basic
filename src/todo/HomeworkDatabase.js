const database = localStorage;

export const store = (item) =>
  new Promise((resolve, reject) => {
    if (item.length === 0) {
      return reject("아무것도 입력하지 않았습니다");
    }
    let list = [];
    const data = database.getItem("arrays");
    // 로컬 스토리지(localStorage)**에서 "arrays"라는 **키(key)**에 해당하는 데이터를 불러오는 코드
    if (data) {
      list = JSON.parse(data); // JSON 형식의 문자열인 data를 자바 객체 또는 배열로 변환
    }

    list.unshift(item);

    database.setItem("arrays", JSON.stringify(list)); // 데이터를 저장
    //JSON.stringify()는 JavaScript 객체나 배열을 문자열로 변환
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

// 이 코드는 **로컬 스토리지(localStorage)**에서
// "arrays"라는 키에 저장된 데이터를 불러오는 함수입니다. 만약 해당 데이터가 없으면 빈 배열을 반환하는 코드입니다.

export const deleteItem = (item) =>
  new Promise((resolve, reject) => {
    let list = [];
    const data = database.getItem("arrays");

    if (!data) {
      return reject("목록이 존재하지 않습니다");
    }

    list = JSON.parse(data);

    list = list.filter((i) => i !== item);

    database.setItem("arrays", JSON.stringify(list));

    return resolve("성공");
  });
