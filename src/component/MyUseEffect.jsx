import { useEffect,useState } from "react";

function MyUseEffect(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        setUsers(allUsers);
        console.log(users);
    },[])
    const allUsers=[
        {id:1,name:'raja',email:'raja@gmail.com',age:24},
        {id:2,name:'maja',email:'maja@gmail.com',age:24},
        {id:3,name:'khaja',email:'khaja@gmail.com',age:24},
        {id:4,name:'gaja',email:'gaja@gmail.com',age:24},
        {id:5,name:'saja',email:'saja@gmail.com',age:24},
        {id:6,name:'laja',email:'laja@gmail.com',age:24},
        {id:7,name:'abc',email:'abc@gmail.com',age:24},
        {id:8,name:'def',email:'def@gmail.com',age:24},
    ]
    return(
        <>
            <table border={2} width={"100%"} cellPadding={0} cellSpacing={0} style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default MyUseEffect;