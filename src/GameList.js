import React from 'react';
import Vid from "./Vid"

import {NavLink} from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

const GameList = (gameinfo) =>{

const {ratings}= gameinfo
const videoID= `"vid"${gameinfo.id}`


            return (
            
            

              <li>
           <Card  style={{marginTop:'5px', marginBottom:'5px'}}>

       
           <CardContent> 
                   <Grid container spacing={3} alignItems="center">
  <Grid item xs={12} sm={10} >
        
   
        {gameinfo.clip ?  <Vid key={videoID}  video={gameinfo.clip} gameinfo={gameinfo}></Vid> : <CardMedia id="preVidImg"
          component="img" 
          image={gameinfo.background_image}
          
          ></CardMedia>}</Grid>
         
          
            
              <Grid item xs={6} sm={6}>
                    <Box  display='flex' style={{height:'30px', }}>
                    {ratings[0] ?  <div style={{backgroundColor:'green',opacity: '0.6', width:`${ratings[0].percent}%`}}>{ratings[0].count}</div> : <div>kein rating</div>}
                    {ratings[1]?  <div style={{backgroundColor:'blue',opacity: '0.6', width:`${ratings[1].percent}%`}}>{ratings[1].count}</div>: <div>kein rating</div>}
                    {ratings[2]? <div style={{backgroundColor:'yellow',opacity: '0.6', width:`${ratings[2].percent}%`}}>{ratings[2].count}</div>: <div>kein rating</div>}
                    {ratings[3]?<div style={{backgroundColor:'red',opacity: '0.6', width:`${ratings[3].percent}%`}}>{ratings[3].count}</div>: <div>kein rating</div>}
                                
                    </Box></Grid>
                   
                   <Grid item xs={10}> <Box>

                    <span className="dotgreen"></span><p className="ratingtext">Exceptional</p>
                    <span className="dotblue"></span><p className="ratingtext">Recommended</p>
                        <span className="dotyellow"></span><p className="ratingtext">Meh</p>
                        <span className="dotred"></span><p className="ratingtext">Skip</p>
                </Box></Grid>
                
                    <Grid item xs={1}>
                    <NavLink  to={{pathname:'/gameinfo', gameinfo:`${gameinfo.id}`, gamename:`${gameinfo.name}`}}>
                    <img  width="30px" height="30px" alt="infoButton" src="https://img.icons8.com/ios/50/000000/info.png"/> 
                    </NavLink></Grid>
                   </Grid> </CardContent></Card>
                   </li>
              )
    }

export default GameList;