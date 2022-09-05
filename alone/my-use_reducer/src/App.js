import logo from './logo.svg';
import './App.css';
import {useState ,useReducer } from 'react'



// reducer = state 를 업데이트 하는 역할 ( 은행 )
// dispatch = state 업데이트를 위한 요구
// action = 어떤 행동 
const initialState = {money: 100000};
const reducer = (state, action) =>{
  //여기서 state가 강의보면 state state 하는데 그냥 이거 호출할 당시의 myMoney 값일뿐임 
  console.log(action.choicePay);
  console.log(state.money)
  switch (action.type) {
    case 'increment':
      return {money: parseInt(state.money) +  parseInt(action.choicePay.num)};
    case 'decrement':
      return {money: parseInt(state.money) - parseInt(action.choicePay.num)};
    default:
      throw new Error();
  }
 
}
 
function App() {
  const [num , setNum] = useState(0);
  // 여기서 0 은 money의 초기값. 즉 useState() 안의 값이랑 똑같음. 어렵게 생각 ㄴㄴ 그러니 obj도 들어갈수있겠지 ?
  const [myMoney, moneyDispatch ] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <h1> useReducer 이용한 은행 </h1>
      <input type="number" step="1000" onChange={(e) => { setNum(parseInt(e.target.value)) }}/>
      <button onClick={() => moneyDispatch({type: 'increment' , choicePay : {num} })}>예금</button>
      <button onClick={()=>{moneyDispatch({type: "decrement" , choicePay : {num}  })}}>출금</button>
      <br/>
      <h2>잔고 :  {myMoney.money}</h2>
    </div>
  );
}

export default App;
