
import React, { Component } from "react";
import Genre from "./Genre"
import Box from '@material-ui/core/Box';
import {NavLink} from "react-router-dom";

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
    
    <Box display="flex"  flexDirection="row" p={1} m={2} flexWrap="wrap" alignContent="flex-end" justifyContent="center">
    {this.state.genres.map((genre,index)=>{
      return (<NavLink key={index} style={{textDecoration:'none'}} to={{pathname:'/games', genre:{slug: `${genre.slug}`}}}><Genre key={genre.id} start={index} genre={genre}></Genre></NavLink>)
      })}</Box>

      



    </div>
  )
}}

export default GenreSelect;
