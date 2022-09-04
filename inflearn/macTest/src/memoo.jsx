import { useState } from "react"
import { useMemo } from "react" 
import react from 'react';

const memoo = react.memo(function memoo(props) {

    console.log("재렌더링"+JSON.stringify(props))
     

  return (
    <div>memo

    <h1>props1 {props.value.val1}</h1>

    <h1>props2 {props.value.val2}</h1>

    <h1>props3 {props.value.val3}</h1>

    <h1>props4 {props.value.val4}</h1>

    </div>
    
  )
} );
export default memoo;
