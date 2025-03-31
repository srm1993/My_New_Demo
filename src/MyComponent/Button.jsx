import { memo } from "react";
function Button({handleClick,text}){
    console.log('button')
    return(
        <button onClick={handleClick}>{text}</button>
    )
}
export default memo(Button);