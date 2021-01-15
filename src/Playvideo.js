import React from 'react'
import Card2 from './Card2'
import Sdata from './Sdata1'
import Card1 from './components/Card'

const Playvideo=()=>{
    return(
<>
<Card1 imgsrc={Sdata[0].imgsrc} 
name={Sdata[0].name}/>
 <Card1 imgsrc={Sdata[1].imgsrc} 
name={Sdata[1].name}/>
<Card1 imgsrc={Sdata[2].imgsrc} 
name={Sdata[2].name}/>

</>
    )
};
export default Playvideo;