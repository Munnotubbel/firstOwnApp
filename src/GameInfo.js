
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import { Player } from 'video-react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';




export class GameInfo extends Component {
    state ={  gameinfo:[],
              twitch: [],
              youtube: [],
              clip:[]
    };
async componentDidMount() {
  var gameid= this.props.gameid

console.log("Game loaded! id: "+this.props.gameid)

fetch(
`https://api.rawg.io/api/games/${gameid}`
)
.then(response => response.json())
.then(response => this.setState({ gameinfo: response, clip: response.clip}));
}

twitch (){  var gameid= this.props.gameid
  fetch(
  `https://api.rawg.io/api/games/${gameid}/twitch`)
  .then(response => response.json())
  .then(response => this.setState({ twitch: response}));
  console.log(this.state.twitch)
  }
youtube (){  var gameid= this.props.gameid
  fetch(
  `https://api.rawg.io/api/games/${gameid}/youtube`)
  .then(response => response.json())
  .then(response => this.setState({ youtube: response}));
  console.log(this.state.youtube)}

render() {
 if(this.state.clip)
  console.log(this.state.clip)
const bildurl = this.state.gameinfo.background_image
return (

 <Grid container  alignItems="center" style={{width:'100%'}}>
<Grid item xs={12}><h3>{this.state.gameinfo.name}</h3></Grid>

{this.state.gameinfo && 
<Grid item xs={12} sm={6} style={{padding:'5px'}}><img style={{width:'100%'}} alt={this.state.gameinfo.name} src={bildurl}></img></Grid> }
{/* <Hidden only='xs'>
<Grid item xs> 
  <iframe className="iframe" title={this.state.gameinfo.name} 
           frameBorder="0"
           src={this.state.clip.clip}
           allowFullScreen="true"
          controls="1"
         
          ></iframe> </Grid></Hidden>  */}
<Grid item xs={12} sm={6} style={{padding:'5px'}}><p>{this.state.gameinfo.description_raw}</p></Grid>

<Grid item xs={12}>
 
</Grid>


</Grid>
)
}}
GameInfo.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(GameInfo);
