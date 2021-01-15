import { purple } from '@material-ui/core/colors'
import React, { useState } from 'react'
const Event=()=>{
    const purple="#8e44ad";
    const [bg,setBg]=useState(purple);
    const [name,setName]=useState("click Me 😄 ")
    const bgChange=()=>{
        let newBg="#34495e";
        setBg(newBg);
        setName("Done ha 🤲")
    };
    const bgBack=()=>{
        setBg(purple);
        setName("Ayyo !! ❤️");
    }
    

    return(
        <>
        <div style={{backgroundColor:bg}}>
    <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
        </div>
        </>
    )
}
export default Event;