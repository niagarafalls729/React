function App() {
  const name ='ㅎㅎㅎ';

  function AppFF(){
    return <div>100</div>
  }
  return (
    <div className="App">
      <h1>test233</h1>
      <h2>{name}</h2>
      <h3>{AppFF()}</h3>
      <h3><AppFF/></h3>
      

    </div>
  );
}

export default App;