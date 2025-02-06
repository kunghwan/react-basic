import { useState, useEffect } from "react";

const Verify = () => {
  const [mobile, setMobile] = useState("010"); // useState =>  상태관리 . 끝
  const [verificationCode, setVerificationCode] = useState(null);
  const [code, setCode] = useState("");
  const [time, setTime] = useState(180);

  const onSend = () => {
    // mobile 길이가 11자리가 아니면 경고
    if (mobile.length !== 11) {
      return alert("연락처를 입력해주세요.");
    }

    // 코드 보내면 verification Code 를 생성한 뒤 교체
    let number = 0;
    while (number.toString().length <= 5) {
      console.log("generating...");
      number = Math.floor(Math.random() * 1000000);
    }

    setVerificationCode(number.toString());
  };

  const onVerify = () => {
    console.log({ code, verificationCode }, "verifying...");

    if (time === 0) {
      setVerificationCode(null);
      setTime(180);
      return alert("인증 시간이 종료되었습니다. 다시 한 번 발급해주세요.");
    }

    if (code.length !== 6) {
      return alert("인증번호는 6자리 입니다.");
    }

    if (verificationCode && verificationCode !== code) {
      return alert("인증번호가 틀립니다. 다시 한 번 확인해주세요.");
    }

    alert("인증되었습니다.");

    // 하고 싶은 코드 짜기
    setVerificationCode(null);
    setCode("");
    setTime(180);
  };

  useEffect(() => {
    console.log({ verificationCode });

    if (
      verificationCode &&
      verificationCode.length === 6 &&
      code.length === 6
    ) {
      onVerify();

      return () => {
        onVerify();
      };
    }
  }, [verificationCode, code]);

  useEffect(() => {
    if (verificationCode) {
      const countId = setInterval(() => {
        setTime((prev) => (prev === 0 ? 0 : prev - 1));
      }, 1000);

      return () => {
        clearInterval(countId);
      };
    }
  }, [verificationCode]);

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

        <button>{verificationCode ? "인증하기" : "인증번호 전송"}</button>
      </form>

      {verificationCode && <h2>{getTime(time)}</h2>}
    </div>
  );
};

export default Verify;

const getTime = (time) => {
  const min = Math.floor(time / 60);

  // Math.floor() 언제나 버림 처리하고 주어진 숫자와 같거나 작은 정수 중에서 가장 큰수 반환

  const sec = time - min * 60;

  // time에min * 60(잠시 초.초가 계산됩니다.
  // 예를 들어, time = 125, min = 2일 때sec = 125 - (2 * 60) = 125 - 120 = 5가5 초로

  return `${min}:${sec.toString().length === 1 ? `0${sec}` : sec}`;

  //   조건 ? A:B
  // 조건에 부합하면 ? 옆의  A  코드를 실행합니다.
  // 조건에 부합하지 않으면 : 옆의 B코드를 실행합니다.

  // 조건 && A
  // 조건에 부합할 때만 A코드를 실행해주세요.

  // !조건 && B
  // 조건에 부합하지 않을 때에만 B코드를 실행해주세요.

  // 한줄짜리 코드만 실행가능
  //   if ( 조건){
  // A
  //   } else {
  // B
  //   }
};
