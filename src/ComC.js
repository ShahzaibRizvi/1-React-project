import React from 'react'
import {FirstName, LastName} from './context/Context_api'
const ComC=()=>{
    return(
        <FirstName.Consumer>{(fname)=>{
            return(
            <LastName.Consumer>{(lname)=>{
            return(
                <h1>This is FirstName {fname}{lname}</h1>
            )
}
        }
            </LastName.Consumer>
            )}}</FirstName.Consumer>
       
    )
}
export default ComC;