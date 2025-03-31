import React, { useContext } from "react";

const color=React.createContext("violet")
function MyContext(){
    const theme=useContext(color);
    return(
        <>
            <h1 style={{color:theme}}>Hello Everyone.</h1>
        </>
    )
}
export default MyContext;