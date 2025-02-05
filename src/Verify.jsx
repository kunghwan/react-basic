import { useState, useEffect } from "react";

const Verify = () => {
  const [mobile, setMobile] = useState("010");
  const [verificationCode, setVerificationCode] = useState(null);
  const [code, setCode] = useState("");
  const [time, setTime] = useState(180); // 3분으로 타이머 설정

  // 인증번호 생성 함수
  const generateVerificationCode = () => {
    let number = 0;
    while (number.toString().length < 6) {
      number = Math.floor(Math.random() * 1000000); // 6자리 숫자 생성
    }
    return number.toString();
  };

  // 인증번호 전송 함수
  const onSend = () => {
    if (mobile.length !== 11) {
      return alert("연락처를 11자리로 입력해주세요");
    }

    const code = generateVerificationCode();
    setVerificationCode(code); // 인증번호 생성 후 설정
    setCode(""); // 기존 입력 코드 초기화
    setTime(180); // 타이머 3분 초기화
  };

  // 인증번호 확인 함수
  const onVerify = () => {
    console.log({ code, verificationCode }, "verifying...");

    if (time === 0) {
      setVerificationCode(null);
      setTime(180); // 타이머 초기화
      return alert("인증 시간이 종료되었습니다. 다시 한 번 발급해주세요.");
    }

    if (code.length !== 6) {
      return alert("인증번호는 6자리입니다.");
    }

    if (verificationCode !== code) {
      return alert("인증번호가 틀립니다. 다시 한 번 확인해주세요.");
    }

    alert("인증되었습니다!");

    // 인증 성공 후 상태 초기화
    setVerificationCode(null);
    setCode("");
    setTime(180); // 타이머 초기화
  };

  // 타이머를 관리하는 useEffect
  useEffect(() => {
    if (verificationCode) {
      const countId = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(countId); // 타이머 종료 시 인터벌 클리어
            return 180; // 3분으로 리셋
          }
          return prev - 1;
        });
      }, 1000);

      // 컴포넌트가 언마운트될 때 타이머를 클리어
      return () => {
        clearInterval(countId);
      };
    }
  }, [verificationCode]);

  // 타이머를 00:00 형식으로 반환하는 함수
  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time - min * 60;
    return `${min}:${sec.toString().length === 1 ? `0${sec}` : sec}`;
  };

  return (
    <div>
      <h1>본인인증</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verificationCode ? onVerify() : onSend();
        }}
      >
        <input
          type="text"
          value={verificationCode ? code : mobile}
          onChange={(e) =>
            verificationCode
              ? setCode(e.target.value)
              : setMobile(e.target.value)
          }
          placeholder={verificationCode ? "인증번호입력" : "01012341234"}
        />
        <button type="submit">
          {verificationCode ? "인증하기" : "인증번호 발송"}
        </button>
      </form>

      {verificationCode && <h2>{getTime(time)}</h2>}
    </div>
  );
};

export default Verify;
