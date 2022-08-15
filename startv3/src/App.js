import AppModuleStyles from "./AppModule.css";
import AliasImportNameHello  from './component/Heelo';
import Home from "./page/Home";
import {Route , Routes, Link} from 'react-router-dom';
import About from "./page/About";

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
      <Link  to="/">Home</Link>      |      <Link  to="/about">About</Link>
     </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
     <AliasImportNameHello></AliasImportNameHello> 

    </div>
  );
}

export default App;
 