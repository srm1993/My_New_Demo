import { useMemo, useState } from "react";
import Button from "./Button";

function MyCalculation(value){
    return value*10;
}
function MyMemo(){
    const [count,setCount]=useState(0);
    const calculation=useMemo(()=>MyCalculation(count),[count]);
    return(
        <>
            <p>count: {count}</p>
            <p>Calculation: {calculation}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default MyMemo;