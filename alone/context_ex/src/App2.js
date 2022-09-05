import React from "react";
import App3 from "./App3"; 
import { useContext } from "react";
import { statethema} from './modules/statethema'

export default function App2() {
  const {btn,setBtn} = useContext(statethema); 
  
  function ChangeBtn(){  
    setBtn(btn => !btn)
    console.log("B"+JSON.stringify({btn}))
  }
  return (
    <div>
      App2 
      <App3></App3>
      App2 <button onClick={ ChangeBtn}>btnState</button>
      {btn.toString()}
    </div>
  );
}
