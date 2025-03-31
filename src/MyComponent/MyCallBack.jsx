import { useState,useCallback } from "react";
import Button from "./Button";

function MyCallBack(){
    console.log('my call back')
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);
    const increment=useCallback(()=>{
        setCount(count+1);
    },[count])
    return(
        <>
        <p>Count: {count}</p>
        <p>Number: {number}</p>
        <button onClick={()=>setNumber(number+1)}>Number</button>
        <Button handleClick={increment} text={"increment"} />
        </>

    )
}
export default MyCallBack;