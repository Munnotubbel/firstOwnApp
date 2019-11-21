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
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";

const Comment = props => {
  const { slug, users } = props;
  if (props.gameDB) {
    if (props.gameDB[slug]) {
      const { comments } = props.gameDB[slug];
      return (
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          {comments && (
            <Grid container>
              {props.gameDB[slug].comments
                .slice(0)
                .reverse()
                .map(comment => {
                  var authorID = comment.authorID;
                  return (
                    <Grid container>
                      {comment.title !== null ? (
                        <Card>
                          <CardContent>
                            <Grid container>
                              <Grid
                                item
                                xs={10}
                                sm={10}
                                md={10}
                                lg={10}
                                xl={10}
                              >
                                <Typography variant="h6">
                                  {comment.title}
                                </Typography>
                                <Box>
                                  <Typography variant="caption">
                                    <NavLink
                                      to={{
                                        pathname: "/profilepage",
                                        profileID: `${comment.authorID}`
                                      }}
                                    >
                                      {comment.username}
                                    </NavLink>
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography variant="caption">
                                    {moment(
                                      comment.createdAt.toDate()
                                    ).calendar()}
                                  </Typography>
                                </Box>
                              </Grid>

                              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                {users[authorID].avatar ? (
                                  <Avatar
                                    className="centerIMG"
                                    alt="avatar"
                                    src={users[authorID].avatar}
                                  />
                                ) : (
                                  <Avatar
                                    style={{
                                      background: "green",
                                      color: "white"
                                    }}
                                  >
                                    {users[authorID].initials}
                                  </Avatar>
                                )}
                              </Grid>

                              <Grid
                                item
                                xs={10}
                                sm={10}
                                md={10}
                                lg={10}
                                xl={10}
                              >
                                <Typography variant="body1" component="div">
                                  {comment.content}
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      ) : null}
                    </Grid>
                  );
                })}
            </Grid>
          )}
        </Grid>
      );
    } else {
      return <h4>no comments yet - did i hear a squeak?</h4>;
    }
  } else {
    return <h4>...pls hold the line</h4>;
  }
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
