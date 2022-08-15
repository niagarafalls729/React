import React , { useState }from "react";

const Input = () => {
    const [textValue , setTextValue ] = useState("");

    const inputChange = (e) => {
        setTextValue(e.target.value);
        console.log("DD");
    }
    return(
            <div>
                <input type="text" onChange={inputChange}></input>
                <br></br><br></br><br></br>
                <p>{textValue}</p>
            </div>
    )
} 
export default Input;