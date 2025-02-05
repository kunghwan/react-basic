// 1. useState, useEffect 불러오기

// 1-2. const로 verificationCode라는 변수 선언하고 '123123' 할당하기

const Code = () => {
  // 2. useState로 code로 변수 선언한 뒤 초기값으로 ''

  //   4. onCheck라는 이름으로 함수 만들기

  // 4-1 code 값이 6자리 일 때 code와 verificationCode가 일치한지 검사하고 일치하면 인증되었습니다. 틀리면 같지 않습니다. 경고 처리하기

  // 5. useEffect로 code를 감지해서 code길이가 6자리일 때에만 onCheck하도록 코드 짜기
  return (
    <div>
      <h1>Code</h1>
      {/* 3. input 만들고 value로 code연결하기, onChange속성으로 code값 변경하기 */}
      {/* 5. button 만들어서 클릭했을 때 code */}
    </div>
  );
};

export default Code;
