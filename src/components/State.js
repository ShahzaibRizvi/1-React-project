import { render } from '@testing-library/react';
import React from 'react';
class State extends React.Component{
constructor(){
    super();
    this.state={
        name:'peter',
        email:'shahzaib@gmail.com',
        roll:12
    }
}

updateState(){
    this.setState(
        {
            name:'Ali',
            
        }
    )
}

    
ali=()=>{
    document.write(this.state.name)
}
render(){
    return(
        <div>
            <h1>hallo{this.state.name}</h1>
            <h2>email{this.state.email}</h2>
            <h4>hamza</h4>
            <h3>check constructer{this.state.roll} </h3>
            <input onChange={(e)=>this.setState({name:e.target.value})} type="text" id='val'></input>
            <button onClick={this.ali}>check function</button>
            <button onClick={()=>{this.updateState()}}>Click it</button>
            
            
        </div>
    )
}
}
export default State;