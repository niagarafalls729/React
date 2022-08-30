import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
    margin: 40px;
`;

const ContentH2 = styled.h2`
    color: ${(props) => (props.name === 'hello'? 'red' : 'black')};
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;


const App = () => {
    return (
        <ContentDiv>
            <ContentH2 name="hello2">Q&A</ContentH2>
            <ContentH2 name="hello">Q&A</ContentH2>
            <p>
                어쩌고 저쩌고
              
            </p>
        </ContentDiv>
    );
};

export default App;