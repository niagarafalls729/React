import React from 'react'
import { ContextStore } from './store/ContextStore';
import { useContext } from 'react';

function JcontextChlid() {

  const age = useContext(ContextStore);
  console.log("age"+age);
  return ( 
    <div>JcontextChlid 2대손 app에서 직접 전달받은 값 : {age}</div>
  )
}
export default  JcontextChlid;