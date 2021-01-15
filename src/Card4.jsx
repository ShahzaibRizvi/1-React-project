import React from 'react'
import Sdata from './Sdata';
const Card4 = (props) => {
  return (
    <>  
   <div className="col-md-4 mx-auto">
                <div className="card " >
                  <img src={props.imgsrc} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="text-center">
                    <a href="#" className="btn btn-primary r">Read More</a>
                    </div>
                  </div> 
                </div>
                </div>    
    </>
  )
}
export default Card4;