import React from "react"; 
import "./App.css";   
import App2 from "./App2";
import {themes as aaaaaa} from './modules/themes '
import {themes2} from './modules/themes '
import { statethema} from './modules/statethema'
import { useState } from "react";

function App() {
  console.log(themes2)

  const [ btn ,setBtn ] =useState(false);

  return (
    <aaaaaa.Provider value={ {themes2} }>
      <statethema.Provider value={{btn,setBtn}}>
      App
      <App2 />
      App
      </statethema.Provider>
    </aaaaaa.Provider>
  );
}


export default App;
