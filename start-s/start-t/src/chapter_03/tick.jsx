import React from "react";
import ReactDOM from "react-dom"; 

function tick(){
    const element_nowTime = (
        <div>
            <h1>지금 시간은 ?</h1>
            <h2>현재 시각 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element_nowTime,document.getElementById('libH'));

}
 
setInterval(tick,1000);

export default tick;
