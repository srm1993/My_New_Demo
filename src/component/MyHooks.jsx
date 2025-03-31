import { useState } from "react";

function MyHooks(){
    const [num,setNum]=useState(0);
    return(
        <>
            <h3>{num}</h3>
            <button onClick={()=>setNum(num+1)}>Click Me</button>
        </>
    )
}
export default MyHooks;