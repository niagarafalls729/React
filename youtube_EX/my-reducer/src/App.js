import React, { useReducer, useState } from "react";
import Student from "./Student";

const reducer111 = (state, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case "add":
      const newStudent = {
        id: Date.now(),
        name: action.payload.stateName,
        isHere: true,
      };
      return {
        count: state.count + 1,
        students333: [...state.students333, newStudent],
      };
    case "del":
      return {
        count: state.count - 1,
        students333: state.students333.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "choice":
      return {
        count: state.count,
        students333: state.students333.map((student) => {
          if(student.id === action.payload.id){
            return {...student, isHere: !student.isHere};
          }
          return student;
        })
      };
    default:
      return state;
  }
};

const initialState777 = {
  count: 0,
  students333: [],
};

function App() {
  const [stateName, setName] = useState("");
  const [studentInfo, dispatch222] = useReducer(reducer111, initialState777);
  // reducer - state를 업데이트하는 역할
  // dispatch - state 업데이트를 위한 요구
  // action - 요구의 내용
  //initialState777 의 값이 studentInfo 의 초기값이다
  // reducer111 함수 내부 첫 state는 studentInfo의 값이 또 들어감  action은 말그대로 이해했던 내용
  // dispatch222를 부르면 reducer111 가 실행되는 원리.

  return (
    <div>
      <h1>출석</h1>
      <p>총학생수 : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름"
        value={stateName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch222({ type: "add", payload: { stateName } });
        }}
      >
        추가
      </button>

      {studentInfo.students333.map((i) => {
        return (
          <Student
            key={i.id}
            name={i.name}
            dispatch222={dispatch222}
            id={i.id}
            isHere={i.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;
