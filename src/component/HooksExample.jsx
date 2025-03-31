import { useState } from "react"

export default function HooksExample(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [age,setAge]=useState('')
    return(
        <>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" onKeyUp={(event)=>setName(event.target.value)} /><br/>
            <input type="email" name="email" id="email" placeholder="Enter Your Email" onKeyUp={(event)=>setEmail(event.target.value)} /><br/>
            <input type="password" name="password" id="password" placeholder="Enter Your Password" onKeyUp={(event)=>setPassword(event.target.value)} /><br/>
            <input type="number" name="age" id="age" placeholder="Enter Your Age" onKeyUp={(event)=>setAge(event.target.value)} /><br/>
            <input type="submit" name="btn" id="btn" value={"Register"} />
        </>
    )
}