import React from "react";
import { useEffect } from "react";
import { useState } from "react"; 
 
//이건 나혼자 강의듣다가 그냥해본거임 .
// 근데 일단 effect 안에서는 return이 불가능하며 함수호출은 가능하다함.
// 물론 아래처럼ㅎ ㅏㄹ 경우 렌더링안됨으로 페이지 전환은안됨
function Anum(num) {
  if (num % 2 == 0) {
    return <p>짝수</p>
  } else {
    return <p>홀수</p>
  }
} 

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleContUp(e) {
    setCount(count + 1);
  }

  useEffect(() => {
    Anum(count);
  }, [count]);


  
  return (
    <div>
      {count} COUNT
      <button onClick={(e) => handleContUp(e.target.value)}>UP!</button>
      <Anum/> 
    </div>
  );
}
