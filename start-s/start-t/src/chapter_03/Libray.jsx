import React from "react";
import Book from "./Book";

function Libray(props){
    return(
        <div>
            <Book name="처음만난 파이썬" page={300}></Book>
            <Book name="처음만난 자바" page={400}></Book>
            <Book name="처음만난 리엑트" page={500}></Book>
        </div>
    )
}
export default Libray;