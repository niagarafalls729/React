import React, { useRef, useState } from "react";

const App = () => {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  const [main, setMain] = useState(""); // pw state 값
  const inputCheck = (e) => {
    e.preventDefault();
    
    if(emailInput.current.value === ''){
      emailInput.current.focus();
      setMain("아이디를 입력해주세요")
      return;
    }else{
      setEmailValue(emailInput.current.value);
    }
    if(pwInput.current.value === ''){
      pwInput.current.focus();
      setMain("비밀번호를 입력해주세요")
      return;
    }else{
      setPwValue(pwInput.current.value);
    }
    setMain("환영합니다.");
    
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        회원가입
      </button>
      <span>{emailValue}</span>
      <span>{pwValue}</span>
      <h1>{main}</h1>
    </form>
  );
};

export default App;