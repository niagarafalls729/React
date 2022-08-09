// const Hello = function () {
//     <p>Hello</p>
// };

import World from "./World";

// export default Hello;


// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;
// 위에 2가지 방식도 사용가능 
export default function Heelo(){
    console.log("DDDD");

    return <p>Hello.js 입니다 <World></World></p>;
}

