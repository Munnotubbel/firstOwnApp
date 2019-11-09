import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
// import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Player } from 'video-react';
import ReactPlayer from "react-player"

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import zIndex from '@material-ui/core/styles/zIndex';

const Vid = ({video, gameinfo, index}) =>{
    const styles = {
        
          marginLeft: "40%",
          marginRight: "40% ",
          position:'absolute',
          marginTop:'50px',
           width:'50px'
        
      }
const bildurl= gameinfo.background_image
const mov = `mov${gameinfo.id}`

    const pic = `pic${gameinfo.id}`
    const button = `${gameinfo.id}`
    const titleID = `title${gameinfo.id}`

return(
   <Grid container>

   <Typography   gutterBottom className="headlinesBackground gameTitle" id={titleID} style={{position: 'absolute', marginTop:'-1px', zIndex:'50' }}>
         {gameinfo.name}
          </Typography>
            
            {video.clip ?  <Video id={mov}
          controls={['PlayPause', 'Time']}
          poster={bildurl}>    
 
     <source src={video.clips[640]} title={gameinfo.name}/>
       
       </Video> 
         
       :
         

          <CardMedia id={pic}
          component="img"
          height="100%"
          image={bildurl}
         
          ></CardMedia> }
          
</Grid>

 )}

export default Vid