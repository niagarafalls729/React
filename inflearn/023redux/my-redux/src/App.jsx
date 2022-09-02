import Div1 from "./Div1";
import Div2 from "./Div2";
import Div3 from "./Div3";
import Div4 from "./Div4";
import Div5 from "./Div5";
import Div6 from "./Div6";
import React, { useReducer, useState } from "react";

const useReducerValue = { 
  
  title: null,
  fontsize: 9,
  wb : null,
}
const reducer111 = (state, action) => {
  console.log(state); 
  switch (action.type) {
    case "Change":
      return {
        ...state, title : action.payload.jisuText
      } 
    case "fontUp":
      return {
        ...state,fontsize : state.fontsize+1

      } 
      case "fontDw":
    return {
        ...state, fontsize : state.fontsize-1
    } 
      
    default:
    return useReducerValue;
  }  
  
};


function App() {
  
  const [jisuText,setJisuText] = useState('초기값');
  const [useReducerValueHeader, dispatch222] = useReducer(reducer111, useReducerValue); 

  return (
    <div className="App">
      <h1>만들어보자 REDUX </h1>
      <h1>{jisuText}</h1>
      <h1>{useReducerValueHeader.title}</h1>
      <input type="text"
        onChange={(e) => {
          setJisuText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch222({ type: "Change", payload: { jisuText } });
  
        }}
      >
        적용
      </button>
      <button
        onClick={() =>{
          dispatch222({type : "fontUp", payload: 1 });
        }}
      
      >폰트크기 +</button>
      <button
        onClick={() =>{
          dispatch222({type : "fontDw", payload: -1 });
        }}
      >폰트크기 -</button>
      <button>background W/B</button>
      <Div1 parentValue={useReducerValueHeader}/>
      <Div2 parentValue={useReducerValueHeader}/>
      <Div3 parentValue={useReducerValueHeader}/>
      <Div4 parentValue={useReducerValueHeader}/>
      <Div5 parentValue={useReducerValueHeader}/>
      <Div6 parentValue={useReducerValueHeader}/>
    </div>
  );
}

export default App;
