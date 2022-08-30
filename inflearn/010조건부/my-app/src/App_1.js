function App() {
  return (
    <div className="App">
      <h1>test2343</h1>
      <Hello name = 'J'></Hello>
      <Hello></Hello>
    </div>
  
  );
}

function Hello(props){
 if(props.name){
  return(<div>
    <h1>안녕하세요 {props.name}</h1>
  </div>)
 }
 return(
  <NoName/>
 )
}


function NoName(){
  return(<div>
    <h1>이름을 입력안함</h1>
  </div>
  )
}
export default App; 