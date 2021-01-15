import React, { createContext } from "react"
import ComA from '../ComA'
const FirstName=createContext();
const LastName=createContext();
const Context_api=()=>{
return(
    <FirstName.Provider value={"dost"}>
        <LastName.Provider value={"Vinod"}>
        <ComA/>
        </LastName.Provider>
    </FirstName.Provider>
    
)
}
export default Context_api;
export {FirstName,LastName};