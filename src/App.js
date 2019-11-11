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
 
  HashRouter
} from "react-router-dom";
import Button from '@material-ui/core/Button';


import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./App.css"


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
          gameid:"",
          gamename:""
        };


        constructor(props){
          super(props);
          this.goBack = this.goBack.bind(this); // i think you are missing this
       }
       
       goBack(){
           this.props.history.goBack();
       }

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
      console.log(props.location.gamename)
      this.state.gameid=props.location.gameinfo
      this.state.gamename=props.location.gamename
    }
      
      return (
        <GameInfo gameid={this.state.gameid}/>        
      );
    }

    render() {
    const {classes} = this.props

 
  
  return (
    
<React.Fragment>

  
  <HashRouter>
  
   <React.Fragment>
      <CssBaseline />
     <ElevationScroll {...this.props}>
        <AppBar>
          <Toolbar> 
          <Grid container

  justify="space-between"
  container spacing={3}>           
            <GoHome />
            <Typography variant="h5">Gamer's Pilot</Typography>
            <GoBack/>
            </Grid>
           </Toolbar>
        </AppBar>
      </ElevationScroll> 
    <Toolbar /> 
   
    </React.Fragment>
   



    
    <Grid container>

   
  <Route exact path="/" component={PlatformSelect}/>
  <Route path="/genres" component={this.platformPicked}/>
   <Route path="/games" component={this.genrePicked}/>
   <Route path="/gameinfo" component={this.gamePicked}/>
   </Grid>
    </HashRouter>
    </React.Fragment>
  )
}}

export default withStyles(styles)(App);
