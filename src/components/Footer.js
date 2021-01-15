import React from 'react';
const Footer =(props)=>{
    return(
        <div className="ma4 bg-light-purple dib pa3 grow shadow-4">
        <img src='https://joeschmoe.io/api/v1/random' height="200px"/>
        <h1 className="tc">{props.name}</h1> 
        <div>
        <p className="tc">{props.work}</p>
        
        </div>
        </div>
    )
}
export default Footer;
