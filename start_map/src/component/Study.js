import React, { useState, useEffect } from "react";



function Study(props) {
    
    const [btnCTN,setBtnCTN] = useState(0);
        
    function fn_btnClick(){


        setBtnCTN(btnCTN+1);
    }
    useEffect(() => { 
        document.title = `You clicked ${btnCTN}`;
        }
    )
  return (
    <div>
      <h1>{btnCTN}번 클릭했습니다.</h1>
      <button onClick={fn_btnClick}>btn</button>
    </div>
  );
}
export default Study;
