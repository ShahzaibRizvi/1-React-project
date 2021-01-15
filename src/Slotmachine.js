import { Checkbox } from '@material-ui/core';
import React from 'react'


const myproglang=["java","php","pythen","c++"]
const [top1,,topsecondlast]=myproglang

// let x ;
// let y;
// let z;
const Slottable=(props)=>{
    if ( props.x===props.y && props.y===props.z ){
    return (
    <h1>This is match 😄 😄 😄</h1>
    )} 
else {
    return(
        <h1>this is not match 😃🐶 😺</h1>
    )
}
};
const App1=(props)=>{
    return(
        <>
        <h1>Welcome Machine Game {topsecondlast}</h1>
        <Slottable y="😄" x="😄" z="🐶"/>
        </>
    )
}


export default App1;
