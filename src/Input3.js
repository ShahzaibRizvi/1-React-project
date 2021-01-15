import React,{useState,useContext} from 'react'
import {ContextProvider} from './context/Contextprovider'
const Input=()=>{
    const {sendMessage}=useContext(ContextProvider)
    const [msg,setMsg]=useState("");
    const sendMsg=(e)=>{
        e.preventDefault();
        sendMessage(msg);
        setMsg("");
    }
    return(
        <div>
<div className="input_form">
<form onSubmit={sendMsg}>
  <input type="text" className="input_control" onChange={(e)=>setMsg(e.target.value)} value={msg} required placeholder="Write messeges"></input>
</form>
</div>
        </div>
    )
}
export default Input;