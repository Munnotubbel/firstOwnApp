import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const GoBack = ({ history }) => (
  <button
    className="navButtons back"
    onClick={() => history.goBack()}
    alt="Go back"
    align="right"
    variant="contained"
  >
    back
  </button>
);

export default withRouter(GoBack);
