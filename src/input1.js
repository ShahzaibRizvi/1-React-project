import React, { useState } from 'react'
const Form1=()=>{
       const [fullName,setName]=useState({
           fname:"",
           lname:"",
           email:"",
           phone:"",
       });
       const inputEvent=(event)=>{
           console.log(event.target.value)
           console.log(event.target.name)
           const {name,value}=event.target; 
           setName((preValue)=>{
                if(name==="fname"){
                return {
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:preValue.phone,
                };
            } else if (name==="lname"){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                    phone:preValue.phone,
                };
               
            }
            else if (name==="email"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    phone:preValue.phone,
                };
               
            }
            else if (name==="phone"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:value,
                };
               
            }
        }
            );
       };
       const onSubmit=(event)=>{
        event.preventDefault();   //remove the defualt function
    }

    return(
        <>
        <form onSubmit={onSubmit} >
        <h1>Hallo {fullName.fname}{fullName.lname}</h1>
        <p>{fullName.email}{fullName.phone}</p>
        <input type="text" onChange={inputEvent} value={fullName.fname} name="fname"></input><br></br><br></br>
        <input type="text" onChange={inputEvent} value={fullName.lname} name="lname" ></input><br></br>
        <input type="email" onChange={inputEvent} value={fullName.email} name="email"></input><br></br>
        <input type="Phone" onChange={inputEvent} value={fullName.phone} name="phone" ></input>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form1;