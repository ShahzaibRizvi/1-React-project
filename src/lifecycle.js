import React, { Component } from 'react'

class App55 extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
        console.log("constructer")
    }
    static getDerivedStateFromProps(){
        console.log("check it")
        return{
            count:5
        } 
    }
    componentDidMount(){
        console.log("componetDidMount")
    }
    render ()
    {
        console.log("render....")
        return(
            <div>
                <h1>Life cycle</h1>
            </div>
        )
    }
}
export default App55;