import React, { useState } from 'react'
const   Contact=()=>{ 
  const [data,setData]=useState({
    Name:'',
    Last:'',
    Email:'',
    Msg:'',
  });
  const InputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })
  }
  const formSubmit =(e)=>{
e.preventDefault();
alert(`${data.name}`);
  }
        return(
                <>
                <div className="my-5">
           <h1 className="text-center">Contact Us</h1>
           </div>
           <div className="container">
                   <div className="row">
<div className=" col-md-6 mx-auto">
<form onSubmit={formSubmit}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="Name" value={data.Name}  onChange={InputEvent}placeholder="Enter Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="Last" value={data.Last}  onChange={InputEvent}  placeholder="Enter Last Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="Email" value={data.Email}  onChange={InputEvent}  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" name="Message" value={data.Msg}  onChange={InputEvent} >Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form>
</div>
<div className="col-md-12 text-center">
    <button type="submit" class="btn btn-outline-primary mb-3 btn-submit">Submit</button>
  </div>
                   </div>
           </div>
           </>
        )
        };
export default Contact;