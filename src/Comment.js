import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Comment = props => {
  console.log(props);
  return (
    <CardContent>
      {/*   <Typography component="h3" gutterBottom>
            {this.props.post.createdAt}
          </Typography> */}
      <Typography variant="h5" component="h2" gutterBottom>
        {props.post.title}
      </Typography>
      <Typography color="textSecondary">{props.post.username}</Typography>
      <Typography variant="body2" component="div" style={{ display: "" }}>
        {props.post.content}
      </Typography>
    </CardContent>
  );
};
export default Comment;
