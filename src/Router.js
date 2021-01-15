import React from 'react'
import {BrowserRouter as Router,Route,} from "react-router-dom";
  import Home from './Home'
  import About from './About'
  class Approuter extends React.Component{
      render(){
          return(
              <Router >
              <Route exact path='/' component={Home} />
              <Route path='./about' component={About} />
              </Router>
          )
      }
  }
  

export default Approuter;