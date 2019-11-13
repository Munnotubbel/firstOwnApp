import React from 'react'

import "./App.css"
import Box from '@material-ui/core/Box';

const Platform = ({platform,start}) =>{
  const bildurl=platform.url;


return(
    <Box className="element backImages" style={{backgroundImage: `url(${bildurl}`,
    animationDelay:`${3-start*(3/13)}s`,
       }}>
      <Box className="pulseTitle headlines"  style={{backgroundColor:'rgba(255, 255, 255, 0)'}}>{platform.name}</Box>
    
</Box>

 )}

export default Platform