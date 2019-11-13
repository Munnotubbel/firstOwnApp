import React from 'react'
import "./App.css"
import Box from '@material-ui/core/Box';

const Genre = ({genre,start}) =>{
    
const bildurl=genre.image_background;


return(
    <Box  className="element" style={{backgroundImage: `url(${bildurl}`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       animationDelay:`${3-start*(3/19)}s`,
       border:'0px solid #000000'}}>
      <Box className="pulseTitle genretext headlines" style={{border: '0px solid black',borderRadius: '5px' }}>{genre.name}</Box>
    
</Box>

 )}

export default Genre