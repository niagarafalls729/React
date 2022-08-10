import AppModuleStyles from "./AppModule.css";
import AliasImportNameHello  from './component/Heelo';


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
     <AliasImportNameHello></AliasImportNameHello>
     <AliasImportNameHello></AliasImportNameHello>
     <AliasImportNameHello></AliasImportNameHello>
    </div>
  );
}

export default App;
