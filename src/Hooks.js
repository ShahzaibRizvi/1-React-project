import React, { useState } from 'react'
const count=0;
const d = new Date();
const Hooks=()=>{
    const newTime=new Date().toLocaleTimeString();
    const[count ,setCount]=useState(newTime);
    const updatetime=()=>{
        setCount(count +newTime)
    }
    setInterval(updatetime,10)
return(
    <>
    <h1> {newTime}</h1>
    <button onClick={updatetime}>Click It</button>
    </>
)
}
export default Hooks;