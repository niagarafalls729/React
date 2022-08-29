function App() {
  return (
    <div className="App">
      <h1>test233</h1>
      <Hello name='Jisu'/>
      <Hello />
      <Hello2 name='Jisu'/>
    </div>
  );
}

function Hello(props){
  const name = props.name;
  const num = [ "a", "b", "c", "d", "e"]
  const numComponentList = num.map(i => <p key={i}>안녕,{name},{i}</p>) 
  return<div> 
    {numComponentList}
  </div>
}

function Hello2(props){
  const name = props.name;
  const num = [ 1, 2, 3, 4, 5]
  return<div> 
    {num.map(i => <p key={i}>안녕,{name},{i}</p>) }
  </div>
}

export default App;