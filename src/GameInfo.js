import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import MediaSlider from "./MediaSlider";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import YouTube from "react-youtube";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";
import PricePicker from "./PricePicker";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";
import { responsiveFontSizes } from "@material-ui/core";
const opts = {
  height: "auto",
  width: "auto",
  playerVars: {
    autoplay: 0,
    controls: 1
  }
};

export class GameInfo extends Component {
  state = {
    gameinfo: [],
    twitch: [],
    youtube: [],
    clip: [],
    youtube: [],
    movies: [],
    developers: [],
    rating: "",
    publishers: [],
    released: "",
    genres: [],
    platforms: [],
    stores: [],
    infofetch: [],
    steam: [],
    suggested: [],
    screenshots: []
  };
  async componentDidMount() {
    var gameid = this.props.gameid;

    console.log("Game loaded! id: " + this.props.gameid);

    fetch(`https://api.rawg.io/api/games/${gameid}`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          genres: response.genres,
          gameinfo: response,
          clip: response.clip,
          developers: response.developers,
          rating: response.esrb_rating ? response.esrb_rating.id : 6,
          publishers: response.publishers,
          released: response.released,
          stores: response.stores
        })
      );
    this.fetchMoreInfos();
  }

  fetchMoreInfos = () => {
    var gameid = this.props.gameid;
    fetch(`https://api.rawg.io/api/games/${gameid}/youtube?page_size=5`)
      .then(response => response.json())
      .then(response => this.setState({ youtube: response.results }));
    fetch(`https://api.rawg.io/api/games/${gameid}/movies`)
      .then(response => response.json())
      .then(response =>
        this.setState({ movies: response.results[0] ? response.results : "" })
      );
    fetch(
      `https://api.rawg.io/api/games/${gameid}/suggested?page_size=40?page=1`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          suggested: response
        })
      );
    fetch(`https://api.rawg.io/api/games/${gameid}/screenshots`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          screenshots: response.results
        })
      );
  };

  ratingSelect = () => {
    if (this.state.rating === 0) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/earlyChild_far9pa.png";
    } else if (this.state.rating === 1) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/everyone_fguptx.png";
    } else if (this.state.rating === 2) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/everyoneTenPlus_idl5jh.png";
    } else if (this.state.rating === 3) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/teenPlus_k8kb8e.png";
    } else if (this.state.rating === 4) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/mature_vo4sm1.png";
    } else if (this.state.rating === 5) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/adultsOnly_kpoahs.png";
    } else if (this.state.rating === 6) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/ratingPending_krafuu.png";
    }
  };
  getStoreLogo = storeID => {
    if (storeID === 1) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412358/gamerspilot/steam_trnjnr.png";
    } else if (storeID === 2) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412358/gamerspilot/microsoft_m88jga.png";
    } else if (storeID === 3) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412358/gamerspilot/playstation_fyxqwr.png";
    } else if (storeID === 4) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412359/gamerspilot/apple_bqoink.png";
    } else if (storeID === 5) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412359/gamerspilot/gog_s5mlbu.png";
    } else if (storeID === 6) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412358/gamerspilot/nintendo_f53zxb.png";
    } else if (storeID === 7) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412359/gamerspilot/xbox_gzqwyf.png";
    } else if (storeID === 8) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412358/gamerspilot/google_g4bidz.png";
    } else if (storeID === 9) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412358/gamerspilot/itch_sdyuyp.png";
    } else if (storeID === 11) {
      return "https://res.cloudinary.com/munnotubbel/image/upload/v1573412359/gamerspilot/epic_xqcdsg.png";
    }
  };

  render() {
    if (this.state.gameinfo) console.log(this.state.gameinfo);
    // console.log(this.state.rating);
    if (this.state.movies) console.log(this.state.movies);
    const bildurl = this.state.gameinfo.background_image;
    const youtubeUrl = this.state.youtube.external_id;
    return (
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ width: "100%" }}
      >
        <Grid item align="center" xs={12}>
          <h3>{this.state.gameinfo.name}</h3>
        </Grid>

        {this.state.gameinfo && (
          <Grid item align="center" xs={12} sm={8} style={{ padding: "5px" }}>
            <img
              style={{ width: "100%" }}
              alt={this.state.gameinfo.name}
              src={bildurl}
            ></img>
          </Grid>
        )}

        <Grid item xs={10} sm={10} md={10}>
          {this.state.movies ? (
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
              {this.state.movies.map((vid, index) => {
                return (
                  <div style={{ width: "100%" }}>
                    <Video
                      id={`video${index}`}
                      controls={["PlayPause", "Time", "Volume", "Fullscreen"]}
                      loop={true}
                      poster={vid.preview}
                    >
                      <source src={vid.data[480]} />
                    </Video>
                  </div>
                );
              })}
            </AwesomeSlider>
          ) : (
            ""
          )}
        </Grid>

        <Grid
          item
          align="center"
          xs={11}
          sm={11}
          style={{ padding: "5px", textAlign: "left" }}
        >
          <p style={{ marginTop: "50px" }}>
            {this.state.gameinfo.description_raw}
          </p>
        </Grid>

        <Grid item xs={8}>
          <ul>
            <h4>Developers:</h4>
            {this.state.developers &&
              this.state.developers.map(dev => {
                return <li>{dev.name}</li>;
              })}
          </ul>
        </Grid>

        <Grid item xs={4}>
          {this.state.rating && (
            <img width="82px" height="124" src={this.ratingSelect()}></img>
          )}
        </Grid>

        <Grid item xs={8}>
          <ul>
            <h4>Publishers:</h4>
            {this.state.publishers &&
              this.state.publishers.map(pub => {
                return <li>{pub.name}</li>;
              })}
          </ul>
        </Grid>

        <Grid item xs={4}>
          <ul>
            <h4>Released:</h4>
            {this.state.released && <li>{this.state.released}</li>}
          </ul>
        </Grid>

        <Grid item xs={8}>
          <ul>
            <h4>Genres:</h4>
            {this.state.genres &&
              this.state.genres.map(genre => {
                return <li>{genre.name}</li>;
              })}
          </ul>
        </Grid>

        <Grid item xs={12}>
          <ul style={{ listStyleType: "none" }}>
            <h4>Shop at:</h4>
            {this.state.stores[0] ? (
              this.state.stores.map((buy, index) => {
                var storeID = buy.store.id;
                var url = buy.url;
                var storeName = buy.store.name;
                return (
                  <li>
                    <img
                      style={{
                        verticalAlign: "-12px",
                        marginRight: "5px",
                        width: "32px"
                      }}
                      src={this.getStoreLogo(storeID)}
                    ></img>
                    <a id={"link" + storeID} href={url}>
                      {buy.store.name}&nbsp;
                      <PricePicker storeID={storeID} url={url} />
                    </a>
                  </li>
                );
              })
            ) : (
              <li>not available</li>
            )}
          </ul>
        </Grid>
        {this.state.youtube && (
          <Grid item align="center" xs={10} sm={10}>
            <MediaSlider movies={this.state.youtube}></MediaSlider>
          </Grid>
        )}

        <Grid item align="center" xs={10} sm={10}>
          {this.state.screenshots ? (
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
              {this.state.screenshots.map(screens => {
                return (
                  <div>
                    <img className="sliderImg" src={screens.image}></img>
                  </div>
                );
              })}
            </AwesomeSlider>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    );
  }
}
GameInfo.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(GameInfo);
