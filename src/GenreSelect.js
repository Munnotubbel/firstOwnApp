
import React, { Component } from "react";
import Genre from "./Genre"
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

export class GenreSelect extends Component {
  state ={  genres:[],
            loading: false,
      };
  async componentDidMount() {
    this.setState({loading: true})
    fetch(
      `https://api.rawg.io/api/genres`
    )
      .then(response => response.json())
      .then(response => this.setState({ genres: response.results, loading:false }));
     
  }
  render() {
    
  return (
    
    <div>
    <div><NavLink to="/">home</NavLink></div>
    <NavLink to="/">back</NavLink>
     
    <div>{this.state.genres.map((genre)=>{
      return (<NavLink to={{pathname:'/games', genre:{slug: `${genre.slug}`}}}><Genre key={genre.id} genre={genre}></Genre></NavLink>)
      })}</div>
    </div>
  )
}}

export default GenreSelect;
