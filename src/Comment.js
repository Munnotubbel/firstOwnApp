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
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Comment = props => {
  const { slug, users } = props;

  console.log(props);
  console.log(props.gameDB[slug]);
  return (
    <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
      <Grid container>
        {props.gameDB[slug].comments
          .slice(0)
          .reverse()
          .map(comment => {
            var authorID = comment.authorID;
            return (
              <Grid>
                {comment.title !== null ? (
                  <Card>
                    <CardContent>
                      <Grid container>
                        <Typography component="h3" gutterBottom>
                          {moment(comment.createdAt.toDate()).calendar()}
                        </Typography>
                        <Typography variant="h6" component="h6" gutterBottom>
                          {comment.title}
                        </Typography>

                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                          {users[authorID].avatar ? (
                            <Avatar
                              className="centerIMG"
                              alt="avatar"
                              src={users[authorID].avatar}
                            />
                          ) : (
                            <Avatar
                              style={{ background: "green", color: "white" }}
                            >
                              {users[authorID].initials}
                            </Avatar>
                          )}
                        </Grid>

                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                          <Typography>{comment.username}</Typography>
                        </Grid>

                        <Typography
                          variant="body2"
                          component="div"
                          style={{ display: "" }}
                        >
                          {comment.content}
                        </Typography>
                      </Grid>
                    </CardContent>
                  </Card>
                ) : null}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};
const mapStateProps = state => {
  const gta = "grand-theft-auto-iii";
  // console.log(state.firestore.data.projects[gta]);
  // console.log(state);

  return {
    users: state.firestore.data.users,
    gameDB: state.firestore.data.projects
  };
};

export default connect(mapStateProps, null)(Comment);

/* export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    {
      collection: "projects"
      // , orderBy: ["createdAt", "desc"]
    },
    { collection: "users" }
  ])
)(Comment); */
