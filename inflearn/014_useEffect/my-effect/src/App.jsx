import React, { useState, useEffect } from 'react';


function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds()); 
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  // 컴포넌트가 업데이트 될 때마다 매번 실행
  // useEffect(()=>{
  //   console.log('hello world');
  // })

  // // 처음에만 실행
  // useEffect(()=>{
  //   console.log('hello world');
  // }, [])

  // // 변수들의 변화가 일어날 때마다 실행
  // useEffect(()=>{
  //   console.log('hello world');
  // }, [변수1, 변수2...])
 


  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time/>
    </div>
  );
}

export default App;