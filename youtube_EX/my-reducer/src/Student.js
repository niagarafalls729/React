import React from "react";

//export default function Student(props) {
const Student = ({ name, dispatch222, id,isHere }) => {
  return (
    <div>
      <span
      style={{color: isHere ? 'red': 'gray',backgroundColor : isHere? 'black':'blue'
      
      } }
      
      
      onClick={()=>{dispatch222({type: 'choice' , payload:{id}})}}
      >{name}</span>
      <button
        onClick={() => {
          dispatch222 ( { type: "del", payload: { id } } );
          
        }}
      >
        삭제
      </button>
    </div>
  );
};
export default Student;
