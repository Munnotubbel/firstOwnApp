import React from 'react';
import {
    NavLink,

} from "react-router-dom";


const GameList = (probs) =>{

    {/* <ul>
        {games.map((game, index) =>{ */}

            return (<li style={{height:'5rem', fontSize:'1.2rem'}}><NavLink to={{pathname:'/gameinfo', gameinfo:`${probs.id}`}}>{probs.name}</NavLink></li>)
       {/*  })}
    </ul>; */}}

export default GameList;