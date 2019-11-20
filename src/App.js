import React, { Component } from "react";
import PlatformSelect from "./PlatformSelect";
import GameInfo from "./GameInfo";
import GoBack from "./GoBack";
import GoHome from "./GoHome";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";

import * as serviceWorker from "./serviceWorker";
import GenreSelect from "./GenreSelect";
import GameOverview from "./GameOverview";
import { Route, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";
import { createStyles, withStyles } from "@material-ui/core/styles";
import "./App.css";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signOut } from "./store/actions/authActions";
import { connect } from "react-redux";
import LinkSwitch from "./LinkSwitch";
import { getProject } from "./store/actions/projectActions";
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
  state = {
    platform: "",
    slugName: "",
    genre: "",
    gameid: "",
    gamename: "",
    title: "Gamer's Pilot",
    titleSize: 5,
    logedin: true,
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  adjustXPos = e => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = e => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

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

  updateTitle = title => {
    if (title === "Gamer's Pilot") {
      this.setState(
        { title: title, titleSize: 5 },
        console.log("----------Titel updated------------")
      );
    } else {
      this.setState(
        { title: title, titleSize: 7 },
        console.log("----------Titel updated------------")
      );
    }
  };
  GoHome() {
    return <PlatformSelect />;
  }

  detectRotate = () => {
    window.addEventListener("orientationchange", function() {}, false);
  };
  render() {
    const { projects } = this.props;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;

    return (
      <React.Fragment>
        <style>{"body { background-color: #77A6F7; }"}</style>
        <HashRouter>
          <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...this.props}>
              <AppBar style={{ position: "sticky" }}>
                <Toolbar className="appBar">
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={4}
                  >
                    <GoHome />
                    <Grid
                      item
                      align="center"
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Typography
                        variant={`h${this.state.titleSize}`}
                        style={{ maxWidth: "200px", overflowX: "hidden" }}
                      >
                        {this.state.title}
                      </Typography>
                    </Grid>
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
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Grid>
          <Draggable bounds="body" {...dragHandlers}>
            <div className="buttonDrop">
              <div className="button-top" id="dragButton">
                <LinkSwitch></LinkSwitch>
              </div>
            </div>
          </Draggable>
        </HashRouter>

        <ScrollUpButton
          style={{ zIndex: "20" }}
          ToggledStyle={{ right: "83%" }}
          EasingType="easeOutBack"
          ShowAtPosition={150}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
