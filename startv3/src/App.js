import "./App.css";
import AliasImportNameHello  from './component/Heelo';
import Welcome from "./component/Welcome";

//모든 컴포넌트는 함수명은 대문자.
function App() {
  const name = "TMO";
  const naver = {
    url : "www.naver.com"
    , name :"네이버입니다"
  }
  return (
    <div className="App">
      
      <h1 style={{ color: "red", backgroundColor: "blue" }}>hello , {name} </h1>
      <h2><AliasImportNameHello/></h2>
      <h3><Welcome></Welcome></h3>
      <a href={naver.url}>{naver.name}</a>
      
    </div>
  );
}

export default App;
