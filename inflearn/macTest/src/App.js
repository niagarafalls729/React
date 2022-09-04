import "./App.css";

import { useState, useRef ,useMemo } from "react";
import MEMOO from "./memoo" 

function App() {
  console.log("DD");
  const [useVal, setUseVal] = useState("초기값");
  const nameInput = useRef();
  const MrefBody = useRef();
  const MrefTitle = useRef();

  const [useMval, setUseMval] = useState({
    title: "t",
    contents: "c",
  });

  function fn_on(inValue) {
    if(inValue ===1 ){
    nameInput.current.value.length > 0
      ? setUseVal(nameInput.current.value)
      : setUseVal(useVal);
    }else if (inValue ===2){
      setUseMval( 
        { title : MrefTitle.current.value
        , contents : MrefBody.current.value }
      )
    }else{
      setMemovalue(
        { ...memovalue, val1 : memovalue.val1}
      )
    }
  }
  const [memovalue ,setMemovalue] = useState(
    {
      val1 : "val1 b" ,
      val2 : "val22" ,
      val3 : "val333" ,
      val4 : "val4444" ,
    }
  )

  return (
    <div className="App">
      <h1>test233</h1>
      <h1>{useVal}</h1>
      <input type="text" ref={nameInput}></input>
      <button onClick={() => fn_on(1)}>값 확인</button>
      <h1>--------------------</h1>
      <h3>useMval.title:: {useMval.title}</h3>
      <h3>useMval.contents ::{useMval.contents}</h3>
      <input ref={MrefTitle}></input>
      <input ref={MrefBody}></input>
      <button onClick={()=>fn_on(2)}> 값 적용2</button>
      <h1>--------------------</h1>
      <MEMOO value={memovalue}/>
      <button onClick={()=>fn_on(3)}> 값 적용2</button>
    </div>
  );
}

export default App;
