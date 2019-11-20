import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import MediaSlider from "./MediaSlider";
import PropTypes from "prop-types";
import Rating from "react-rating";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRating from "./StarRating";
import "./App.css";
import PricePicker from "./PricePicker";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

import AgeRating from "./AgeRating";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import PlatformAvailable from "./PlatformAvailable";
import Comment from "./Comment";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PostComment from "./PostComment";
import { createRatingEntry } from "./store/actions/ratingAction";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

export class GameInfo extends Component {
  state = {
    slug: "",
    name: "",
    gameinfo: [],
    twitch: [],
    youtube: [],
    clip: [],

    movies: [],
    developers: [],
    rating: "",
    publishers: [],
    released: "",
    genres: [],
    platforms: [],
    stores: [],
    screenshots: [],
    platforms_pc: [],
    plat: [],
    allplat: [],
    comments: []
  };
  async componentDidMount() {
    document.getElementById("searchContainer").style.display = "none";

    var gameid = this.props.gameid;

    console.log("Game loaded! id: " + this.props.gameid);

    fetch(`https://api.rawg.io/api/games/${gameid}`)
      .then(response => response.json())
      .then(response =>
        this.setState(
          {
            slug: response.slug,
            name: response.name,
            genres: response.genres,
            gameinfo: response,
            clip: response.clip,
            developers: response.developers,
            rating: response.esrb_rating ? response.esrb_rating.id : 6,
            publishers: response.publishers,
            released: response.released,
            stores: response.stores,
            platforms_pc: response.platforms[0].requirements
              ? response.platforms[0].requirements
              : ""
          },
          () => this.props.change(`${this.state.name}`)
        )
      );
    this.fetchMoreInfos();
  }

  componentWillUnmount() {
    document.getElementById("searchContainer").style.display = "";
    this.props.change(`Gamer's Pilot`);
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

    fetch(`https://api.rawg.io/api/platforms`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          allplat: response
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
  rawMarkup() {
    var rawMarkup = this.props.content;
    return { __html: rawMarkup };
  }

  render() {
    console.log(this.props);
    if (
      this.state.slug &&
      typeof this.props.gameDB[this.state.slug] == "undefined"
    ) {
      this.props.createRatingEntry({ slug: this.state.slug });
    }
    const { auth } = this.props;

    // if (this.state.comments) console.log(this.state.comments);
    // if (this.state.slug) console.log(this.state.slug);

    const bildurl = this.state.gameinfo.background_image;

    return (
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          style={{ width: "100%", marginTop: "20px" }}
        >
          {this.state.gameinfo && (
            <Grid item align="center" xs={11} sm={6} md={6} lg={8} xl={8}>
              <img
                style={{ width: "100%" }}
                alt={this.state.gameinfo.name}
                src={bildurl}
              ></img>
            </Grid>
          )}
          <Grid item xs={7} sm={6} md={6} lg={4} xl={4}>
            <Grid container spacing={3}>
              <Card>
                <CardContent>
                  {this.state.released && (
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <p>
                        <strong>Released: </strong>
                        {this.state.released}
                      </p>
                    </Grid>
                  )}

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <strong>Genres: </strong>
                    {this.state.genres &&
                      this.state.genres.map(genre => {
                        return <p>{genre.name} </p>;
                      })}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <strong>Developers: </strong>
                    {this.state.developers &&
                      this.state.developers.map(dev => {
                        return <p>{dev.name} </p>;
                      })}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <strong>Publishers: </strong>
                    {this.state.publishers &&
                      this.state.publishers.map(pub => {
                        return <p>{pub.name} </p>;
                      })}
                  </Grid>

                  <Hidden smDown>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ marginTop: "10px" }}
                    >
                      {this.state.gameinfo && (
                        <PlatformAvailable
                          gameinfo={this.state.gameinfo}
                        ></PlatformAvailable>
                      )}
                    </Grid>
                  </Hidden>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Hidden smUp>
            <Grid
              item
              align="center"
              xs={3}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              style={{ marginBottom: "5px", marginLeft: "15px" }}
            >
              {this.state.rating && <AgeRating ratingID={this.state.rating} />}
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={10} sm={6}>
              {this.state.gameinfo && (
                <Card>
                  <CardContent>
                    <PlatformAvailable
                      gameinfo={this.state.gameinfo}
                    ></PlatformAvailable>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Hidden>
          {this.state.movies ? (
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              style={{ marginBottom: "50px" }}
            >
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
            </Grid>
          ) : (
            ""
          )}

          {this.state.slug && (
            <StarRating
              gameid={this.state.gameinfo.id}
              slug={this.state.slug}
            ></StarRating>
          )}
          <Grid
            item
            align="center"
            xs={10}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            style={{ padding: "5px", textAlign: "left" }}
          >
            <Card>
              <CardContent>
                <p style={{ padding: "5px" }}>
                  {this.state.gameinfo.description_raw}
                </p>
              </CardContent>{" "}
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item sm={4} md={4} lg={4} xl={4}>
              {this.state.rating && <AgeRating ratingID={this.state.rating} />}
            </Grid>
          </Hidden>

          <Grid item xs={8} sm={4} md={4} lg={4} xl={4}>
            <ul style={{ listStyleType: "none" }}>
              <strong>Shop at:</strong>
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
                        {/* <PricePicker storeID={storeID} url={url} /> */}
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
            <Grid
              item
              align="center"
              xs={10}
              sm={10}
              style={{ marginTop: "50px" }}
            >
              <MediaSlider movies={this.state.youtube}></MediaSlider>
            </Grid>
          )}

          <Grid
            item
            align="center"
            xs={10}
            sm={10}
            style={{ marginBottom: "50px", marginTop: "50px" }}
          >
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
          {this.state.platforms_pc.minimum && (
            <Grid item xs={11} sm={11} md={11} lg={5} xl={5}>
              <Card>
                <CardContent
                  dangerouslySetInnerHTML={{
                    __html: this.state.platforms_pc.minimum
                  }}
                ></CardContent>
              </Card>
            </Grid>
          )}
          {this.state.platforms_pc.recommended && (
            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={5}
              xl={5}
              style={{ marginBottom: "55px" }}
            >
              <Card>
                <CardContent
                  dangerouslySetInnerHTML={{
                    __html: this.state.platforms_pc.recommended
                  }}
                ></CardContent>
              </Card>
            </Grid>
          )}
          <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
            <Grid
              container
              spacing={3}
              justify="center"
              alignItems="center"
              style={{ width: "100%", marginTop: "20px", marginBottom: "40px" }}
            >
              <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <PostComment
                  gameid={this.state.gameinfo.id}
                  slug={this.state.gameinfo.slug}
                ></PostComment>
              </Grid>

              {this.state.slug && <Comment slug={this.state.slug}></Comment>}
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
GameInfo.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
const mapStateProps = state => {
  return {
    gameDB: state.firestore.data.projects,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRatingEntry: rating => dispatch(createRatingEntry(rating))
  };
};
export default compose(
  connect(mapStateProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "projects"
      // , orderBy: ["createdAt", "desc"]
    },
    { collection: "users" }
  ])
)(GameInfo);
