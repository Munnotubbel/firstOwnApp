import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const GoBack = ({ history }) => <Button onClick={() => history.goBack()} alt="Go back"  align="right" variant="contained">back</Button>;

export default withRouter(GoBack);