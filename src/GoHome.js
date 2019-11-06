import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
    
    NavLink,
   
  } from "react-router-dom";

const GoHome =({}) => <Button align="left" variant="contained" ><NavLink to="/" style={{textDecoration: 'none',}}    >home</NavLink></Button>;

export default withRouter(GoHome);