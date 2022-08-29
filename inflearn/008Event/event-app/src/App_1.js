function App() {

  function fn_onClick(){
    alert("D");
    
  }

  return (
    <div className="App">
      <h1 onClick={fn_onClick}>test233</h1>
      <h1 onClick={()=>{alert("DDDD")}} >test233</h1>
    </div>
  );
}

export default App;