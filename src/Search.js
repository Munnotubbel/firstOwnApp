import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

import { NavLink } from "react-router-dom";

class Search extends Component {
  state = { dataSearch: [], value: "" };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClickOuteside();
  };
  handleClickOuteside = () => {
    document.getElementById("searchResults").style.display = "none";
  };

  resetValue = () => {
    this.setState({ value: "" });
  };

  searchChange(event) {
    document.getElementById("searchResults").style.display = "";
    this.setState({ value: event.target.value, dataSearch: [] }, () =>
      this.searchFetch()
    );
  }

  searchFetch = () => {
    const textInput = this.state.value.replace(/ /g, "-");
    fetch(`https://api.rawg.io/api/games?search=${textInput}`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          dataSearch: response.results
        })
      );
  };

  render() {
    if (this.state.value) console.log(this.state.value);
    if (this.state.dataSearch) console.log(this.state.dataSearch);

    return (
      <Grid
        container
        id="searchContainer"
        justify="center"
        style={{ marginTop: "20px", marginBottoms: "20px", display: "" }}
      >
        <Grid item xs={10} align="center">
          <form noValidate autoComplete="off">
            <TextField
              className="searchText"
              value={this.state.value}
              id="searchField"
              onClick={() =>
                (document.getElementById("searchResults").style.display = "")
              }
              onChange={e => this.searchChange(e)}
              placeholder="search for game directly"
            />{" "}
            <button className="searchReset" onClick={this.resetValue}>
              x
            </button>
          </form>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            position: "absolute",
            display: "none",
            backgroundColor: "white",

            marginTop: "35px",
            zIndex: "500"
          }}
          className="searchContainer"
          id="searchResults"
          ref={node => (this.node = node)}
        >
          <Grid container spacing={2} direction="row">
            {this.state.dataSearch.map(game => {
              return (
                <Grid item xs={10} sm={5} md={4} lg={4} xl={4}>
                  <NavLink
                    className="searchText"
                    to={{
                      pathname: "/gameinfo",
                      gameinfo: `${game.id}`,
                      gamename: `${game.name}`
                    }}
                  >
                    {game.name}
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
