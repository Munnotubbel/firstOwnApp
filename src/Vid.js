import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
// import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ResponsivePlayer from "./ResponsivePlayer"
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
// function playVid (gameID){
  
//     const iframe = document.getElementById(mov)
//     iframe.src =`${video.clips[640]}`
//     iframe.style.display=""    
//     document.getElementById(pic).style.display="none"
//     document.getElementById(button).style.display="none"
//     document.getElementById(titleID).style.display="none"
   
// }

/* function playVid (gameID){
 
    const iframe = document.getElementById(`mov${gameID}`)
    console.log(iframe)
    iframe.style.display=""
    iframe.setAttribute('playing', true)  
    console.log(iframe) 
    document.getElementById(pic).style.display="none"
    document.getElementById(button).style.display="none"
    document.getElementById(titleID).style.display="none"
   
} */



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
          
          image={bildurl}
         
          ></CardMedia> }
          
</Grid>

 )}

export default Vid