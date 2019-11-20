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

// import { updateUser } from "./store/actions/authAction";

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

    const communityValue = 3;
    /*  this.roundHalf(
                        this.props.gameDB[slug].ratings.rate /
                          this.props.gameDB[slug].ratings.counter */
    console.log(this.props);
    const actualLabel = labels[this.roundHalf(this.state.value)];

    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            component="fieldset"
            mb={3}
            borderColor="transparent"
            style={{ border: 0 }}
          >
            <Typography component="legend">Comunity Rating</Typography>

            <Grid
              style={{
                width: "200px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Rating
                size="large"
                readOnly
                name="hover-side"
                value={communityValue}
                precision={0.5}
              />
              <Grid ml={2}>{labels[communityValue]}</Grid>
            </Grid>
          </Grid>

          {/*  {this.props.gameDB[slug].ratings.usersVoted.includes(
            this.props.uid
          ) === false && this.props.uid != null ? ( */}
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            style={{ border: 0 }}
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Typography component="legend">Your Rating</Typography>
            <Grid
              style={{
                width: "200px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Rating
                size="small"
                name="hover-side"
                value={this.state.value}
                precision={0.5}
                onChangeActive={(event, newHover) => {
                  this.handleChange(newHover);
                }}
              />
              <Grid ml={2}>{actualLabel}</Grid>
            </Grid>
            <button onClick={this.handleSubmit}>send</button>
          </Grid>
        </Grid>
      </Grid>
    );
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
