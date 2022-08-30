import {createGlobalStyle} from "styled-components";
import Component  from "./component/GlobalCSSEx";
const GlobalStyle = createGlobalStyle`
span{
  color: red;
  font-size: 12px;
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