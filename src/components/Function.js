import { Router } from '@material-ui/icons';
import React, { Component } from 'react'
import {Router, Switch} from "react-router-dom"
import About from '../About';
import Card2 from '../Card2';
import Nav from '../Navolx'
import About1 from '../Home'
const Router1=()=>{
return(
<>
<Switch>
<Router  path='/' Component={About}/>
<Router exact path='/nav' Component={About1}/> 
</Switch>
</>
);
}

export default Router1;