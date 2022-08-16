import AppModuleStyles from "./AppModule.css";
import AliasImportNameHello  from './component/Heelo';
import Home from "./page/Home";
import {Route , Routes, Link} from 'react-router-dom';
import About from "./page/About";
import Counters from "./page/Counters";
import Input from "./page/Input";
import Multi_Input from "./page/Multi_Input"
import List from "./page/List"
//모든 컴포넌트는 함수명은 대문자.
function App() {
  const name = "TMO";
  const naver = {
    url : "www.naver.com"
    , name :"네이버입니다"
  }
  return (
    <div className="App">
     <h1>dd</h1>
     <nav>
      <Link  to="/">Home</Link>      |      <Link  to="/about">About</Link>  | <Link to="/Counters">Counters</Link> | <Link to="./Input">Input</Link>
      | <Link to="/Multi_Input">mInput</Link>
      | <Link to="/List">List</Link>
     </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/Counters" element={<Counters/>}></Route>
      <Route path="/Input" element={<Input/>}></Route>
      <Route path="/Multi_Input" element={<Multi_Input/>}></Route>
      <Route path="/List" element={<List/>}></Route>
    </Routes>
     <AliasImportNameHello></AliasImportNameHello> 
    </div>
  );
}

export default App;
 