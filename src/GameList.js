import React from 'react';
import {
    NavLink,

} from "react-router-dom";


const GameList = ({games}) =>

    <ul>
        {games.map((game, index) =>{

            return (<div><NavLink to={{pathname:'/gameinfo', gameinfo:`${game.id}`}}>{game.name}</NavLink></div>)
        })}
    </ul>;

export default GameList;