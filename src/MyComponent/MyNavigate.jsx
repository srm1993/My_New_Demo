import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function MyNavigate(){
    const navigate=useNavigate();
    let isLoggedIn=false;
    useEffect(()=>{
        if(isLoggedIn){
            navigate('/about')
        }
    })
    return(
        <>
            <p>This is My Navigation component</p>
        </>
    )
}
export default MyNavigate;