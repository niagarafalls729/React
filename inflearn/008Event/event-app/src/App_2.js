import {useState} from 'react';


function App() {

  const [mouseEvent,setMouseEvent ] = useState("초기값");

  const fn_onMouseEnter = () => {
    console.log("fn_onMouseEnter");
    setMouseEvent("마우스인입");
    return
  }
  const fn_onMouseLeave = () => {
    console.log("fn_onMouseLeave");
    setMouseEvent("마우스떠남");
    return
  }

  return (
    <div className="App">
      <p onMouseEnter={fn_onMouseEnter} onMouseLeave={fn_onMouseLeave}>
        마우스 Enter , Leave 이벤트
      </p>
      <p>{mouseEvent}</p>
    </div>
  );
}

export default App;