import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import GameList from "./GameList";
import fetch from "isomorphic-fetch";
// import Datetime from "react-datetime";

import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { DatePicker, DatePickerInput } from "rc-datepicker";
import "moment/locale/de.js";
import "rc-datepicker/lib/style.css";

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

const date = "2015-06-26";

export class GameOverview extends Component {
  state = {
    games: [],
    number: 40,
    page: 1,
    totalPages: null,
    rating_default: "+rating",
    rating: "+rating",
    count: 0,
    loading: true,
    genre: "",
    platform: 1,
    scrolling: false,
    date_from: "1960-01-01",
    date_from_def: "2019-01-01",
    date_to: "2019-12-31",
    date_to_def: "2019-12-31",

    datePickerDate: "2015-05-13",
    datePickerInputDate: null,
    datePickerInputDate2: null,
    showInput: true,
    disabled: false
  };

  toggleInput = () => this.setState({ showInput: !this.state.showInput });

  onClear = () => this.setState({ datePickerDate: null });

  log = (...x) => console.log(...x); // eslint-disable-line no-console

  resetState = () => this.setState({ datePickerInputDate2: undefined });

  async componentDidMount() {
    this.performSearch();
    this.scrollListener = window.addEventListener(
      "scroll",
      this.handleScroll,
      false
    );
  }

  componentWillUnmount() {
    this.scrollListener = window.removeEventListener(
      "scroll",
      this.handleScroll,
      false
    );
  }

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const ulrich = document
      .getElementById("ul-rich")
      .getElementsByTagName("li");
    const lastLi = ulrich[ulrich.length - 1];
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
  };

  performSearch = () => {
    const genre = this.props.genre;
    const platform = this.props.platform;
    const date_from = this.state.date_from;
    const date_to = this.state.date_to;
    const rating = this.state.rating;
    console.log(
      "Platform: " +
        platform +
        " | Genre: " +
        genre +
        " || LIST OF GAMES LOADED"
    );
    const { number, page, games } = this.state;
    const url = `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${number}&page=${page}&dates=${date_from},${date_to}&ordering=${rating}`;

    fetch(url)
      .then(response => response.json())

      .then(response =>
        this.setState({
          games: [...games, ...response.results],
          totalPages: response.count / number,
          loading: false,
          scrolling: false
        })
      );
  };

  resetAndSearch = () => {
    const genre = this.props.genre;
    const platform = this.props.platform;

    const rating = this.state.rating;
    const { number, page, date_from, date_to } = this.state;
    const url = `https://api.rawg.io/api/games?parent_platforms=${platform}&genres=${genre}&page_size=${number}&page=${page}&dates=${date_from},${date_to}&ordering=${rating}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())

      .then(response =>
        this.setState({
          games: response.results,
          totalPages: response.count / number,
          loading: false,
          scrolling: false
        })
      );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.performSearch
    );
  };

  setDatefrom = fromD => {
    this.setState({ date_from: `${fromD}`, games: [] }, () =>
      this.resetAndSearch()
    );
    console.log(this.state.date_from);
  };

  setDateto = toD => {
    this.setState({ date_to: `${toD}`, games: [] });
    console.log(this.state.date_to);
    this.resetAndSearch();
  };

  render() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={10}
              sm={4}
              md={3}
              lg={2}
              xl={2}
              style={{ margin: "5px" }}
            >
              pick Date from
              <div className="ui input">
                <DatePickerInput
                  displayFormat="DD/MM/YYYY"
                  returnFormat="YYYY-MM-DD"
                  className="walla"
                  onChange={(jsDate, dateString) =>
                    this.setDatefrom(dateString)
                  }
                  onShow={this.log.bind(this, "show")}
                  onHide={this.log.bind(this, "hide")}
                  showOnInputClick
                  placeholder="pick date from"
                  locale="de"
                  onClear={this.onClear}
                />
              </div>
            </Grid>
            <Hidden smDown>
              <Grid item sm={1}></Grid>
            </Hidden>
            <Grid
              item
              xs={10}
              sm={4}
              md={3}
              lg={2}
              xl={2}
              style={{ margin: "5px" }}
            >
              pick Date to
              <div className="ui input">
                <DatePickerInput
                  displayFormat="DD/MM/YYYY"
                  returnFormat="YYYY-MM-DD"
                  className="my-react-component"
                  onChange={(jsDate, dateString) => this.setDateto(dateString)}
                  onShow={this.log.bind(this, "show")}
                  onHide={this.log.bind(this, "hide")}
                  showOnInputClick
                  placeholder="pick date from"
                  locale="de"
                  onClear={this.onClear}
                />
              </div>
            </Grid>
          </Grid>

          <ul
            className="games"
            id="ul-rich"
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              display: "inline"
            }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {this.state.loading ? (
                <p>Loading</p>
              ) : (
                this.state.games.map((game, index) => {
                  return (
                    <Grid id={index} item xs={12} sm={6} lg={4}>
                      <li style={{ float: "left" }}>
                        <GameList
                          {...game}
                          index={index}
                          key={index + game.name}
                        />
                      </li>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </ul>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default GameOverview;
