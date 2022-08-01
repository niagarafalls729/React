import React from "react";

function Book(props){
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}이다. `}</h1>
            <h2>{`이 책은 총  ${props.page}로 이루어져 있다. `}</h2>
        </div>

    );
}

export default Book;
