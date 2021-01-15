import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Header,Header1,Heading} from './components/Header'
import Footer from './components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTextFields from './components/Textfield'
import 'tachyons';
import State from './components/State'
import Img1 from './components/img.jfif'
import Props from './props'
import { getElementError } from '@testing-library/react';
import Card1 from './components/Card'
import Sdata from './shortformcard'
import { Card } from '@material-ui/core';
import Card2 from './Card2'
import Sdata1 from './Sdata1'
import Card3 from './Card3'
import Netflix from './Netflix'
import playvideo from './Playvideo'
import Playvideo from './Playvideo';
const favSeries='pakistan';



function ncard(val){
        console.log(val)
        return(
                <Card1 imgsrc={val.imgsrc} name={val.name}
            /> 
        )
}

const se={
        borDer:'1px solid red'
};

class Logo extends React.Component{
        render(){
                return(
                       [
                                <img src={Img1} />
                       ]
                       
                )
        }
}
const heading={
        backgroundColor:'red',
        textAlign:'center',
};
let curDate=new Date(2020,5,5,20);
curDate=curDate.getHours();
let greeting= "";
const cssStyle={};
if (curDate=1 && curDate<12){
        greeting="good Morning";
        cssStyle.color="green";
}else if(curDate>=12&&curDate<19){
       greeting="Good afternoon";
        cssStyle.color="orange";
}else{
        greeting="good night";
        cssStyle.color="black"
}


const Demo=(props)=>{
        return (
            <div>
                <h1>hello sir , <span style={cssStyle}>{greeting}</span></h1>
                    <input type="text"></input>
                    <Logo/>
                    
                <Header/>
                <Header1/>
                <Footer id="1" name="shahzaib" work="webdeveloper"/>
                <Footer id="1" name="Ali" work="webdeveloper"/>
                <Footer id="1" name="Hamza" work="webdeveloper"/>
                <Footer id="1" name="Usman" work="webdeveloper"/>
                <State/>
                <Heading/>
                <Props name="hamza ch"/>
                <h1 style={{...heading,...{fontSize:'50px'}}}>pakistan</h1>
                <h1>list</h1>
                <ul>
                        <li >I love pakistan</li>
                        <li>I love pakistan</li>
                        <li>I love pakistan</li>
                        <li>I love pakistan</li>
                </ul>

                <div className='check'>
                        <Card1 imgsrc={Sdata[0].imgsrc} 
                        name={Sdata[0].name}/>
                         <Card1 imgsrc={Sdata[1].imgsrc} 
                        name={Sdata[1].name}/>
                <Card1 imgsrc={Sdata[2].imgsrc} 
                        name={Sdata[2].name}/>
               </div>
               this pic
               {(favSeries==="netflix")? <Netflix/> :<Playvideo/>}
              check karo
               <hr ></hr>
{Sdata.map(ncard)}
<h1>check it</h1>

{Sdata1.map((val)=>{
   
                return(
        <Card2 imgsrc={val.imgsrc} name={val.name} key={val.id}/>
                
                );    
                })}

        </div>
      
        )
}





export default Demo;