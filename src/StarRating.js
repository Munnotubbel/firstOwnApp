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

const labels = {
  0.5: "Useless",
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

const useStyles = makeStyles({
  rating1: {
    width: 200,
    display: "flex",
    alignItems: "center"
  }
});

export default function StarRating() {
  const [value, setValue] = React.useState(3.5);
  const comunityValue = 3;
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Comunity Rating</Typography>
        <div className={classes.rating1}>
          <Rating
            readOnly
            name="hover-side"
            value={comunityValue}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Box ml={2}>{labels[comunityValue]}</Box>
        </div>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Your Rating</Typography>
        <div className={classes.rating1}>
          <Rating
            size="small"
            name="hover-side"
            value={value}
            precision={0.5}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        </div>
      </Box>
    </div>
  );
}
