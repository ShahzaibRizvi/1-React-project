import React, { useContext } from "react";
import { ContextProvider } from "./context/Contextprovider";
import Input from "./Input3";
const Messenger=()=>{
  const{allMsg,user}=useContext(ContextProvider)
    return(
    <div className="messenger">
      {allMsg.map((message)=>message.email===user.email ? (<div className="messages_my" key={message.id}>
<div className="messages_my-p">
<p>{message.msg} </p>
</div>
</div>) :(<div className="messenger_other" key={message.id}>
<div className="messenger_other-img">
<img src="/logo192.png" alt="user"/>
</div>
<div className="messages_other-msg">
<span>Shahzaib</span><br></br>
<p>kjsadhkasudjujsadjffnsandj sdjnjn dj ldjsoifdsaiobfjsdb ajvvdsdfdr
  sj vjdv ddf cjw wsdvds vka  fv dskvks avgfnjda vfjk asdv ds vdn fv dffgv ndba ffgv sdbv </p>
</div>
</div>))}
<Input></Input>
    </div>
    )}
    export default Messenger;
