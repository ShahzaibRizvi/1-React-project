import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './About'
import Home from "./Home"
import Service from './Service'
import Contact from './Contact'
import Navbar4 from './Navbar4'
const App3=()=>{
return(
    <>
    <BrowserRouter>
    <Navbar4/>
<Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route  exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/" />
</Switch>
</BrowserRouter>
</>
)
}
export default App3;