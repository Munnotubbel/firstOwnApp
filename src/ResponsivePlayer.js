import React, { Component } from "react";
import ReactPlayer from "react-player"
import "./App.css"

const ResponsivePlayer =({videoUrl})=> {

console.log(videoUrl)
return(

  <div className="player-Wrapper">
    <ReactPlayer 
    controls='true'
     className="react-player"
      url={videoUrl}
       width="100%"
       />

  </div>)}

  export default  ResponsivePlayer