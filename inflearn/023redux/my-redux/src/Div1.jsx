import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



const Div1 = ({ parentValue }) => {
  
  const [fontS , setFontS] = useState('')
  const WB= parentValue.WB
  const  style= {
    fontSize : {fontS} ,
    backgroundColor : 'red',
    border: '1px solid black',
    

  }
  
  // 처음에만 실행
  useEffect(()=>{
     setFontS(parentValue.fontsize+"px")
     style = { ...style, fontSize : {fontS}

      }
  }, [parentValue])
   


  
  console.log("ldll"+JSON.stringify(parentValue.fontsize));
  console.log("useS"+fontS);
  
  return (
    <div style={{fontSize : {style} , backgroundColor : {WB} == 'W'? 'white' : 'black'  }}> {parentValue.title}</div>
  );
};

export default Div1;