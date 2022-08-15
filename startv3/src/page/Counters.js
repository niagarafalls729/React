import React , { useState }from "react";

const Counters = () => {
    const [num , setnum ] = useState(0);

    const onPlus = () => {
        setnum(num+1);
    }
    const onMinus = () => {
        if( num > 0){
            setnum(num-1);
        }else{
            alert("0보다 작을수 없습니다.")
        }
    }

    return(
            <div>
                <button onClick={onPlus}>+1</button>
                <button onClick={onMinus}>-1</button>
                <p>{num}</p>
            </div>
    )
}
export default Counters;