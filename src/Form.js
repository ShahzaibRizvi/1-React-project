import { render } from '@testing-library/react';
import React, { Component, useState } from 'react'
const Form=()=>{
       const [name,setName]=useState();
       const [fullName,setFullname]=useState();
       const [fullName1,setFullname1]=useState();
       const inputEvent=(event)=>{
           setName(event.target.value)
       }
       const [name1,setName1]=useState();
       const inputEvent1=(event)=>
       {
        setName1(event.target.value)
       }
       const onSubmit=(event)=>{
        event.preventDefault();   //remove the defualt function
        setFullname(name)
        setFullname1(name1)
    }

    return(
        <>
        <form onSubmit={onSubmit} >
        <h1>Hallo {fullName} {fullName1}</h1>
        <input type="text" onChange={inputEvent} value={name}></input>
        <input type="text" onChange={inputEvent1} value={name1}></input>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form;