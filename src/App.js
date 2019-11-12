import React, { Component } from "react";
import PlatformSelect from "./PlatformSelect";
import GameInfo from "./GameInfo";
import GoBack from "./GoBack";
import GoHome from "./GoHome";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";

import GenreSelect from "./GenreSelect";
import GameOverview from "./GameOverview";
import { Route, HashRouter } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { createStyles, withStyles } from "@material-ui/core/styles";
import "./App.css";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const styles = createStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

class App extends Component {
  state = { platform: "", genre: "", gameid: "", gamename: "", title:"Gamer's Pilot",titleSize: 5 };

  platformPicked = props => {
    if (props.location.platform) {
      console.log("Your picked Platform is:");
      console.log(props.location.platform);
      this.state.platform = props.location.platform;
    }

    return <GenreSelect />;
  };

  genrePicked = props => {
    if (props.location.genre) {
      console.log("Your picked Genre is:");
      console.log(props.location.genre);
      this.state.genre = props.location.genre;
    }
    return (
      <GameOverview
        platform={this.state.platform.id}
        genre={this.state.genre.slug}
      />
    );
  };

  gamePicked = props => {
    if (props.location.gameinfo) {
      document.getElementById("searchResults").style.display = "none";
      console.log("Your picked Game ID is:");
      console.log(props.location.gameinfo);
      console.log(props.location.gamename);
      this.state.gameid = props.location.gameinfo;
      this.state.gamename = props.location.gamename;
    }

    return <GameInfo change={this.updateTitle} gameid={this.state.gameid} />;
  };

  updateTitle=(title)=>{
    if (title==="Gamer's Pilot"){
    this.setState({title: title,titleSize: 5 }, console.log("----------Titel updated------------"))}
else {this.setState({title: title,titleSize: 7 }, console.log("----------Titel updated------------"))}
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <style>{"body { background-color: #77A6F7; }"}</style>
        <HashRouter>
          <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...this.props}>
              <AppBar style={{position: 'sticky'}}>
                <Toolbar className="appBar">
                  <Grid container  direction="row" justify="space-between" spacing={4}>
                  <GoHome />
                    <Typography variant={`h${this.state.titleSize}`} style={{maxWidth:'200px',overflowX:'hidden'}}>{this.state.title}</Typography>
                    <GoBack />
                  </Grid>
                </Toolbar>
               
              </AppBar>
            </ElevationScroll>
            
          </React.Fragment>
          

          <Grid container>
          <Search />
            <Route exact path="/" component={PlatformSelect} />
            <Route path="/genres" component={this.platformPicked} />
            <Route path="/games" component={this.genrePicked} />
            <Route path="/gameinfo" component={this.gamePicked} />
          </Grid>
       
        </HashRouter>
        <ScrollUpButton EasingType="easeOutBack" ShowAtPosition={150} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
