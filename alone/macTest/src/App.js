import "./App.css";

import {
  useState,
  useRef,
  useMemo,
  useEffect,
  createContext,
  useContext,
} from "react";
import MEMOO from "./memoo";
import Jcontext from "./Jcontext";

import { ContextStore } from "./store/ContextStore";
function HardCurl(num) {
  console.log("HardCurl!" + JSON.stringify(num));
  return (
    <div>
      <h1>num + 1값은 : {num + 1}</h1>
    </div>
  );
}

function App() {
  console.log("function App() {");
  const [useVal, setUseVal] = useState("초기값");
  const nameInput = useRef();
  const MrefBody = useRef();
  const MrefTitle = useRef();

  const [useMval, setUseMval] = useState({
    title: "t",
    contents: "c",
  });

  function fn_on(inValue) {
    if (inValue === 1) {
      nameInput.current.value.length > 0
        ? setUseVal(nameInput.current.value)
        : setUseVal(useVal);
    } else if (inValue === 2) {
      setUseMval({
        title: MrefTitle.current.value,
        contents: MrefBody.current.value,
      });
    } else {
      setMemovalue({ ...memovalue, val1: memovalue.val1 });
    }
  }
  const [memovalue, setMemovalue] = useState({
    val1: "val1 b",
    val2: "val22",
    val3: "val333",
    val4: "val4444",
  });
  /*-------------------------------------
   ** usememo
   */
  const [memoNum, setMemoNum] = useState(1);
  const memoRef = useRef();

  function fn_Change() {
    setMemoNum(parseInt(memoRef.current.value));
  }
  //이렇게할경우 바로위 change 이벤트에서 setMemoNum를 탐 그다음 HardCurl계산을 한다치면
  // 업데이트 할때마다 HardCurl 함수를 탄다음 표기 해야하기에 부하가 발생할수있음.
  // 확인방법은 밑에 주석풀고 다른거 state 값 변경될때 app()렌더링되니깐 그걸로 확인 간으
  //const hardconst = HardCurl(parseInt(memoNum));
  const hardconst = useMemo(() => {
    return HardCurl(parseInt(memoNum));
  }, [memoNum]);
/***************************************/
// ContextStore 에서 파일을 따로 만든경우 
// app 에서 바로해도 됨 근데 이런건 안하는게 좋겠지
/***************************************/

  ///
  return (
    <div className="App">
      <h1>context </h1>
      <ContextStore.Provider value="28">
        <Jcontext />
      </ContextStore.Provider>
<h1>---------↓↓↓↓↓↓↓↓↓use State----------------</h1>
      <h1>test233</h1>
      <h1>{useVal}</h1>
      <input type="text" ref={nameInput}></input>
      <button onClick={() => fn_on(1)}>값 확인</button>
      <h1>--------------------</h1>
      <h3>useMval.title:: {useMval.title}</h3>
      <h3>useMval.contents ::{useMval.contents}</h3>
      <input ref={MrefTitle}></input>
      <input ref={MrefBody}></input>
      <button onClick={() => fn_on(2)}> 값 적용2</button>
      <h1>--------------------</h1>
      <MEMOO value={memovalue} />
      <button onClick={() => fn_on(3)}> 값 적용2</button>
      <h1>---------------usememo 완벽정리 초간단함 -----</h1>
      <p>useMemoState 값 : {memoNum}</p>
      <input
        type="number"
        value={memoNum}
        onChange={() => fn_Change()}
        ref={memoRef}
      ></input>
      <p>{hardconst}</p>
    </div>
  );
}

export default App;
