import React from "react";
import { useEffect } from "react";
import { useState } from "react"; 
 

export default function Counter() {
  const [count, setCount] = useState(0);
  const [ bool, setBool] = useState(false);
  function handleContUp(e) {
    setCount(count + 1);
  }

  useEffect(() => {
    if(bool){
      if(count%2){
        alert('홀수');
      }else{
        alert('짝수');
      }
    }
    setBool(true);
  }, [count]);


  
  return (
    <div>
      {count} COUNT
      <button onClick={(e) => handleContUp(e.target.value)}>UP!</button>
 
    </div>
  );
}
