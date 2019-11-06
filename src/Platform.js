import React from 'react'
import Grid from '@material-ui/core/Grid';
import "./App.css"


const Platform = ({platform}) =>{
    const bildurl=platform.url
   

return(
    <div class="element">
    <Grid 
    container
  direction="row"
  justify="center"
  alignItems="flex-end"
  style={{
    width:'200px',
     height:'200px',
    
      backgroundImage: `url(${bildurl}`,
       backgroundSize: '130px auto',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
        display:'block',
         borderRadius:'100px',
         borderColor: '#000000',
          WebkitBorderRadius:'100px',
          MozBorderRadius:'100px',}}>



          <Grid align="center">{platform.name}</Grid>
          </Grid>
</div>

 )}

export default Platform