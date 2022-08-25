 
import { useState } from "react";
 
    



function Resume(props) {
  let like = 0;

  function clickLike() {
 
      setYourlike(yourlike+1);
 
  }
  const [yourlike,setYourlike] = useState(0);
      //const [name,  setName] = useState( 'JISU초기값');
  const myColor = props.color;
  const styleColor = {color:myColor};
  console.log(myColor);
  return(
      <div style={{border:"solid 1px", width:"500px" ,backgroundColor: myColor }}>
        <h1>jjjjjjj</h1>

          <button onClick={clickLike}>like <span>{yourlike}</span></button>
      </div>
  )
}
 

function App() {
  return (
    <div className="App">
      <h1>test233</h1>
      <Resume name='jisu' color='red'/>
    </div>
  );
}

export default App;
