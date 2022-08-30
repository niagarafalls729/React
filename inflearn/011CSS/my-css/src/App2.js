import {createGlobalStyle} from "styled-components";
import Component  from "./component/GlobalCSSEx";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`
 
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <h1>test233</h1>
      <span>mainSapn</span>
      <Component></Component>
    </div>
  );
}

export default App;