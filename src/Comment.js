import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const Comment = ({ post }) => {
  console.log(post);

  return (
    <CardContent>
      <Grid container>
        <Typography component="h3" gutterBottom>
          {moment(post.createdAt.toDate()).calendar()}
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          {post.title}
        </Typography>
        {/*  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p></p>
        </Grid> */}
        {/*  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          {profile.avatar ? (
            <Avatar className="centerIMG" alt="avatar" src={profile.avatar} />
          ) : (
            <Avatar style={{ background: "green", color: "white" }}>
              {profile.initials}
            </Avatar>
          )}
        </Grid> */}

        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography>{post.username}</Typography>
        </Grid>

        <Typography variant="body2" component="div" style={{ display: "" }}>
          {post.content}
        </Typography>
      </Grid>
    </CardContent>
  );
};
export default Comment;
