
import React, { Component } from "react";
import Genre from "./Genre"
import {
    
    NavLink,
    
  } from "react-router-dom";
  


export class GameInfo extends Component {
    state ={  gameinfo:[],
    };
async componentDidMount() {
var gameid= this.props.gameid

console.log("Game ID")

console.log(gameid)


fetch(
`https://api.rawg.io/api/games/${gameid}`
)
.then(response => response.json())
.then(response => this.setState({ gameinfo: response}));
console.log(this.state.gameinfo)
}
render() {

console.log(this.state.gameinfo.clip)
const bildurl = this.state.gameinfo.background_image

return (

<div>
<div><NavLink to="/">home</NavLink></div>
<NavLink to="/games">back</NavLink>

{/*  <div>{this.state.genres.map((genre)=>{
return (<Genre key={genre.id} genre={genre}></Genre>)
})}</div> */}
<h1>Hier wohnt das Spiel</h1>
<h3>{this.state.gameinfo.name}</h3>

{this.state.gameinfo && 
<div ><img style={{height:'400px',width:'400px'}} src={bildurl}></img></div> }




{/* <div>{this.state.games.map((game)=>{
return (<div><NavLink to={{pathname:'/gameinfo', gameinfo:{id: `${game.id}`}}}>{game.name}</NavLink></div>)
})}</div> */}
</div>
)
}}
export default GameInfo;
