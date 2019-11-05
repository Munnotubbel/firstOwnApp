import React, { Component } from "react";
import PlatformSelect from "./PlatformSelect";
import GameInfo from "./GameInfo"


import GenreSelect from "./GenreSelect";
import GameOverview from "./GameOverview";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  state ={platform:"",
          genre:"",
          gameid:""
        };
  platformPicked = (props) => {
    if (props.location.platform){
    console.log("Your picked Platform is:")
    console.log(props.location.platform)
     this.state.platform=props.location.platform}
     
    return (
      <GenreSelect/>        
    );
  };
 genrePicked = (props) => {
  if (props.location.genre){
    console.log("Your picked Genre is:")
    console.log(props.location.genre)
    this.state.genre=props.location.genre}
    
    return (
      <GameOverview platform={this.state.platform.id} genre={this.state.genre.slug}/>        
    );
  }
  gamePicked = (props) => {
    if (props.location.gameinfo){
      console.log("Your picked Game ID is:")
      console.log(props.location.gameinfo)
      this.state.gameid=props.location.gameinfo}
      console.log(this.state.gameid)
      return (
        <GameInfo gameid={this.state.gameid}/>        
      );
    }
  render() {
  return (
  <div><h1>Games Pilot</h1>
    <HashRouter>
    
   
    <div><Route exact path="/" component={PlatformSelect}/></div>
    <div><Route path="/genres" component={this.platformPicked}/></div>
    <div><Route path="/games" component={this.genrePicked}/></div>
    <div><Route path="/gameinfo" component={this.gamePicked}/></div>
    </HashRouter></div>
  )
}}

export default App;
