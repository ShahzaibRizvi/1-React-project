import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';

class Apps extends Component{
  constructor(){
    super()
    this.state={
      todos:[{title:"Shahzaib",edit:true},{title:"Ali",edit:false }],
      value:''
    }
  }
  add_todo=()=>{
    let obj={title:this.state.value}
this.setState({
 todos:[...this.state.todos,obj],
  value:""
})
  }
  delete_todo=(index)=>{
this.state.todos.splice(index,1)
this.setState(
  {
    todos:this.state.todos
  }
)
  }
  edit_todo=(index,value)=>{
    this.state.todos[index].edit=true;
    this.setState({
      todos:this.state.todos
    })
  }
  handlechange=(e,index)=>{
   this.state.todos[index].title=e.target.value;
  this.setState({
    todos:this.state.todos
  })
  }
  update=(index)=>{
    this.state.todos[index].edit=false ;
    this.setState({
      todos:this.state.todos
    })
  }
 
  render(){
    let {todos,value}=this.state
    return(
      <div>
        <ul>
          <input value={value} onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter value" ></input>
          <button onClick={this.add_todo}>Add Item</button>
          {this.state.todos.map((v,i)=>{
          return <li key={i}>{v.edit?<input type="text" value={v.title} onChange={(e)=>this.handlechange(e,i)}/>:v.title}
          {v.edit ?
        <button  onClick={()=>this.update(i)}>Update</button>  
        :
        <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>
        }
          
          <button onClick={()=>this.delete_todo(i)}>Delete</button>
          </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Apps;
