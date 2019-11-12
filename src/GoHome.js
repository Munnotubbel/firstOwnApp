import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const GoHome = () => (
  <button className="navButtons home" align="left" variant="contained">
    <NavLink to="/" style={{ textDecoration: "none" }}>
      home
    </NavLink>
  </button>
);

export default withRouter(GoHome);
