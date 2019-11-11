
import React, { Component } from "react";
import Genre from "./Genre"

import {NavLink} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  breakpoints: {
     values: {
      xs: 0,
      sm: 550,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});






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
    <div className="centerDiv">
    <MuiThemeProvider theme={theme}>
  <Grid container
  direction="row"
  justify="center"
  alignItems="center">
    
     {this.state.genres.map((genre,index)=>{
      return (
        <Grid item align="center" xs={6} sm={4} md={3} lg={2} xl={2}>
        <NavLink key={index}
         style={{textDecoration:'none'}}
          to={{pathname:'/games', genre:{slug: `${genre.slug}`}}}>
          <Genre key={genre.id} start={index} genre={genre}>
            </Genre>
            </NavLink>
            </Grid>)
      })}

    </Grid>
   </MuiThemeProvider>
    </div>
  )
}}

export default GenreSelect;
