import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class Comment extends Component {
  render() {
    if (this.props) console.log(this.props);

    return (
      <CardContent>
        {/*   <Typography component="h3" gutterBottom>
            {this.props.post.createdAt}
          </Typography> */}
        <Typography variant="h5" component="h2" gutterBottom>
          {this.props.post.title}
        </Typography>
        <Typography color="textSecondary">
          {this.props.post.username}
        </Typography>
        <Typography variant="body2" component="div" style={{ display: "" }}>
          {this.props.post.content}
        </Typography>
      </CardContent>
    );
  }
}

export default Comment;
