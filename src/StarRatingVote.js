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
class StarRatingVote extends Component {
  state = {
    comunityValue: 3,
    value: 0.5,
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
    const actualLabel = labels[this.state.value];

    return (
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
        <Typography component="legend">pls vote</Typography>
        <Grid
          item
          style={{
            width: "200px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Rating
            name="hover-side"
            value={this.state.value}
            precision={0.5}
            onChange={(event, newHover) => {
              this.handleChange(newHover);
            }}
          />
          <Grid item ml={2}>
            {actualLabel}
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
export default connect(mapStateProps, mapDispatchToProps)(StarRatingVote);
