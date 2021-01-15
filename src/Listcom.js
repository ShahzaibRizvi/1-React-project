import React, { useState } from "react"
import DeleteIcon from '@material-ui/icons/Delete';
const Listcom=(props)=>{
  
    const [line,setLine]=useState(false);
  
    const cutit=()=>{
        setLine(true);
    }
   
    return(
    <div className="todo_style">
     
        <span className="btndelete"onClick={cutit}><DeleteIcon/></span>
     <li style={{textDecoration:line ? "line-through":"none"}}>{props.text}</li>
     </div>
    )
};
export default Listcom;