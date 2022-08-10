// const Hello = function () {
//     <p>Hello</p>
// };

import { useState } from "react";

 


// export default Hello;


// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;
// 위에 2가지 방식도 사용가능 
export default function Heelo(){
    
    //let name = "JISU";
    const [name,  setName] = useState( 'JISU초기값');

    function changeName() {

        
        setName(name === "JISU" ? "JISUSUSU" : "JISU"); 
    }
     

    return(
        <div>
            <h1>Hello.js 임</h1>
            <h1>컴포넌트 속성값</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>changeName</button> 
        </div>    
    );
}

