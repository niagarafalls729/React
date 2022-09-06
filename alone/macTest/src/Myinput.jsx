import React from 'react'
import { forwardRef } from 'react'

// const Myinput = forwardRef(
    
//     (props ,ref) =>{
//         return <input ref={ref}></input>
//     }
//     ) 
const Myinput = (props, ref)=>{
    return <input ref={ref}></input>
}
export default forwardRef(Myinput);