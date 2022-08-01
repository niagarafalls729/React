import React from "react";
import Book from "./Book";

function Libray(props){
    return(
        <div id ='LibrayDIVID'>
            <Book name="처음만난 파이썬" page={300}></Book>
            <Book name="처음만난 자바" page={400}></Book>
            <Book name="처음만난 리엑트" page={500}></Book>
            <h1 id = "libH">test</h1>
        </div>
    )
}
export default Libray;