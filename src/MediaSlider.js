import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';

import YouTube from 'react-youtube';




const opts = {
  
  playerVars: { 
    autoplay: 0,
    conrols: 1
  }}

const MediaSlider = ({movies})=>{

    return(
  <AwesomeSlider cssModule={AwesomeSliderStyles}>


  {movies.map((tubes)=>{
return(
  <div>
  <YouTube
  opts={opts}

        videoId={tubes.external_id}
        
      
      /> </div>
  )
               })}
  </AwesomeSlider>)
  
}

export default MediaSlider;