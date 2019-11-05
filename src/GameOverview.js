
import React, { Component } from "react";
import Genre from "./Genre";
import axios from 'axios';
import GameList from "./GameList";
import Filter from "./Filter"
import {
        NavLink,
    
  } from "react-router-dom";

export class GameOverview extends Component {
  state ={  games:[],
            number: 40,
            rating :"+rating",
            count: 0,
            loading: true,
            genre: "",
            platform:1
                  };
  async componentDidMount() {
    this.performSearch()
  }

  performSearch(querry='40') {
    var genre= this.props.genre
var platform = this.props.platform
console.log("ausgabe aller werte")
console.log(platform)
console.log(genre)

    
    fetch(
      `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${querry}&dates=2019-01-01,2019-12-31&ordering=${this.state.rating}`
    )
      .then(response => response.json())
      .then(response => this.setState({ games: response.results, count: response.count, loading: false}));
     
  }
/* ratingsort (wie){this.setState({ rating: {wie}}); console.log(this.state.rating); this.changeData()} */
  
  render() {
    if(this.state.games)console.log(this.state.rating)
  return (
    
    <div>
    <div><NavLink to="/">home</NavLink></div>
    <NavLink to="/genres">back</NavLink>

    {/* <div><button onClick={()=> this.setState({ number: 10})}>Zeig 10</button></div>
    <div><button onClick={()=> this.setState({ number: 20})}>Zeig 20</button></div> */}
    {/* <div><button onClick={()=> this.ratingsort("-rating")}>rating down</button></div>
    <div><button onClick={()=> this.ratingsort("+rating")}>rating up</button></div> */}
     
   {/*  <div>{this.state.genres.map((genre)=>{
      return (<Genre key={genre.id} genre={genre}></Genre>)
      })}</div> */}
      <h1>SpieleÜbersicht</h1>
      <Filter onSearch = {this.performSearch} /> 
        <div> 
          {
            (this.state.loading) ? <p>Loading</p> :<GameList games={this.state.games}/>
          } 
        </div> 
    
      {/* <div>{this.state.games.map((game)=>{
      return (<div><NavLink to={{pathname:'/gameinfo', gameinfo:`${game.id}`}}>{game.name}</NavLink></div>)
      })}</div> */}
    </div>
  )
}}

export default GameOverview;
