import React from 'react'
const Spread=()=>{
    const fullname=[" shahzaib"," ali"];
    const lastname=[1,...fullname];
    const fullname1={
    name:"Hamza",
    father:"Asif",
    };
    const lastname1={
        id:1,
        ...fullname1,
    };
    console.log(lastname1)
    return(
        <>
        <h1>{lastname} </h1>
        </>
    )
}
export default Spread;