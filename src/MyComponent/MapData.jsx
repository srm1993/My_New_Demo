import { useEffect, useState } from "react";

function MapData(){
    const [usersData,setUsersData]=useState([]);
    useEffect(()=>{
        setUsersData(user);
    },[])
    let user=[
        {
            id:1,
            name:"A",
            email:"a@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:2,
            name:"B",
            email:"b@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:3,
            name:"C",
            email:"c@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:4,
            name:"D",
            email:"d@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:5,
            name:"E",
            email:"e@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:6,
            name:"F",
            email:"f@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:7,
            name:"G",
            email:"g@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:8,
            name:"H",
            email:"h@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:9,
            name:"I",
            email:"i@gmail.com",
            age:23,
            phone:9090909090
        },
        {
            id:10,
            name:"J",
            email:"j@gmail.com",
            age:23,
            phone:9090909090
        }
    ];
    return(
        <>
            <table border={1} width={"100%"} style={{color:"green"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default MapData;