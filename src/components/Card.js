import { Card } from '@material-ui/core'
import React from 'react'
import 'tachyons';
import Card2 from 'react'

const heading={
  
    textAlign:'center'
  };
function Card1(props){
    return( 
    <div className='Card1 '>
    <div style={{heading}}>
   <div className="card" style={{width:'20%'}} > 
   <img src={props.imgsrc} alt="Card image" />
   <div className="card-body">
     <h4 className="card-title tc" >{props.name}</h4>
     <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
     <a href="#" className=""  style={{width:'400%',background:'red',border:'5px solid blue'}}>See Profile</a>
   </div>  
   </div>
   </div>
   </div>)
}
export default Card1;