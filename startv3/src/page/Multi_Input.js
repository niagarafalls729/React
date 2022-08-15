import React , { useState }from "react";

const MInput = () => {
    const [textValues , setTextValues ] = useState({
        userName: "",
        userEmail : "",
        userNumber : ""
    });
        const {userName , userEmail , userNumber} = textValues;

    const inputChange = ( inputfunvalue,e ) => {
        const choiceID = e.target.id;
        const choiceValue = e.target.value;
        console.log(inputfunvalue);
        setTextValues(
            {
                ...textValues,
                [choiceID] : choiceValue ,
            }
        );
    }
    
    return(
            <div>
                <div>
                <label>이름</label>
                <input type="text" id="userName"onChange={(e)=>{inputChange("1", e)}}></input> 
                </div>
                <div>
                <label>이메일</label>
                <input type="email" id="userEmail" onChange={(e)=>{inputChange("2",e)}}></input>
                </div>
                <div>
                <label>전화번호</label>
                <input type="number" id="userNumber"onChange={(e)=>{inputChange("3",e)}}></input>
                </div>
                <p>이름 : {userName}</p>
                <p>이메일 : {userEmail}</p>
                <p>전화번호 : {userNumber}</p>
                
            </div>
    )
} 
export default MInput;