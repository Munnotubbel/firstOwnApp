import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { createRating, createRatingEntry } from "./store/actions/ratingAction";
import StarRatingCommunity from "./StarRatingCommunity";
import StarRatingVote from "./StarRatingVote";
import { NavLink } from "react-router-dom";

const labels = {
  0.5: "HELL NO!",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};
class StarRating extends Component {
  state = {
    comunityValue: 3,
    value: 3,
    hover: 3,
    gameid: 0,
    slug: ""
  };

  handleSubmit = () => {
    this.props.createRating(this.state);
  };
  handleChange = number => {
    this.setState(
      {
        value: number,
        hover: number,
        gameid: this.props.gameid,
        slug: this.props.slug,
        uid: this.props.uid
      },
      () => {
        this.props.createRating(this.state);
      }
    );
  };

  roundHalf = n => {
    return parseFloat((Math.round(n * 2) / 2).toFixed(1));
  };
  render() {
    const { slug, uid } = this.props;
    const actualLabel = 2;
    if (this.props.gameDB[slug]) {
      const { ratings } = this.props.gameDB[slug];
      if (this.props.gameDB[slug].ratings) {
        if (typeof uid !== "undefined") {
          return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {ratings && (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <StarRatingCommunity slug={slug} />

                  {ratings.usersVoted.includes(this.props.uid) === false &&
                  this.props.uid != null ? (
                    <StarRatingVote slug={slug} />
                  ) : (
                    <h4>you allready voted for this game</h4>
                  )}
                </Grid>
              )}
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {ratings && (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <StarRatingCommunity slug={slug} />
                  <h4>you allready voted for this game</h4>}
                </Grid>
              )}
            </Grid>
          );
        }
      } else if (typeof this.props.uid !== "undefined") {
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <h4>nobody voted yet</h4>
              </Grid>
              <StarRatingVote slug={slug} />
            </Grid>
          </Grid>
        );
      } else {
        return (
          <h4>
            <NavLink to="/signin">login to vote</NavLink>
          </h4>
        );
      }
    } else if (typeof this.props.uid !== "undefined") {
      return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <h4>nobody voted yet</h4>
            </Grid>
            <StarRatingVote slug={slug} />
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <h4>nobody voted yet</h4>
          <h4>
            <NavLink to="/signin">login to vote</NavLink>
          </h4>
        </Grid>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRating: rating => dispatch(createRating(rating)),
    createRatingEntry: rating => dispatch(createRatingEntry(rating))
  };
};

const mapStateProps = state => {
  console.log(state);
  return {
    users: state.firestore.data.users,
    uid: state.firebase.auth.uid,
    gameDB: state.firestore.data.projects
  };
};
export default connect(mapStateProps, mapDispatchToProps)(StarRating);
