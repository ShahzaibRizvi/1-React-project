import React, { useContext } from 'react'
import ComC from './ComC'
import {FirstName} from './context/Context_api'

const ComB=()=>{
    const lname=useContext(FirstName);
    return(
        <h1>my name {lname}</h1>
    )
}
export default ComB;