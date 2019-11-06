import React, { Component } from "react";
import PlatformSelect from "./PlatformSelect";
import GameInfo from "./GameInfo";
import GoBack from "./GoBack";
import GoHome from "./GoHome";

import Grid from '@material-ui/core/Grid';

import GenreSelect from "./GenreSelect";
import GameOverview from "./GameOverview";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Button from '@material-ui/core/Button';


import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, withStyles } from '@material-ui/core/styles';


const styles = createStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
    const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
   window: PropTypes.func,
};

class App extends Component {

  state ={platform:"",
          genre:"",
          gameid:""
        };


        constructor(props){
          super(props);
          this.goBack = this.goBack.bind(this); // i think you are missing this
       }
       
       goBack(){
           this.props.history.goBack();
       }

  platformPicked = (props) => {
    console.log(props)
    if (props.location.platform){
    console.log("Your picked Platform is:")
    console.log(props.location.platform)
     this.state.platform=props.location.platform}
     
    return (
      <GenreSelect/>        
    );
  };

   
 genrePicked = (props) => {
  console.log(props)
  if (props.location.genre){
    console.log("Your picked Genre is:")
    console.log(props.location.genre)
    this.state.genre=props.location.genre}    
    return (
      <GameOverview platform={this.state.platform.id} genre={this.state.genre.slug}/>        
    );
  }
  
  gamePicked = (props) => {
    console.log(props)
    if (props.location.gameinfo){
      console.log("Your picked Game ID is:")
      console.log(props.location.gameinfo)
      this.state.gameid=props.location.gameinfo}
      
      return (
        <GameInfo gameid={this.state.gameid}/>        
      );
    }
  render() {
    const {classes} = this.props
  return (


<div>
  
  <HashRouter>
  <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...this.props}>
        <AppBar>
          <Toolbar> 
          <Grid container
  direction="row"
  justify="space-between"
  alignItems="center" container spacing={3}>           
            <GoHome item xs/>
            <Typography item xs={8} variant="h5">Games Pilot</Typography>
            <GoBack item xs/>
            </Grid>
           </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          
        </Box>
      </Container>
    </React.Fragment>
    
    
   
    <div><Route exact path="/" component={PlatformSelect}/></div>
    <div><Route path="/genres" component={this.platformPicked}/></div>
    <div><Route path="/games" component={this.genrePicked}/></div>
    <div><Route path="/gameinfo" component={this.gamePicked}/></div>
    </HashRouter></div>
  )
}}

export default withStyles(styles)(App);
