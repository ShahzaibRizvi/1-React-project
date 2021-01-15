import React, { useState,useEffect } from "react"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
const Par=()=>{
    const [count,setcount]=useState(["first value","2nd value"])
    const Update=()=>{
        setcount([...count,"3rd value :","4th value"])
    }
     useEffect(()=>{
console.log("I will run on every render")
    })
    useEffect(()=>{
        console.log("I will run only first render")
            },[])
            useEffect(()=>{
                console.log("I will run on everytime when name update")
                    })

    return(
        <div>
            <h1>{count}</h1>
            <ul>
                {count.map((v,i)=>{
                    return <li key={i}>{v}</li>
                })}
            </ul>
           <button onClick={Update}>submit</button>

        </div>
    )
}
export default Par;
