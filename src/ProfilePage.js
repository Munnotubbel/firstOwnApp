import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import { NavLink } from "react-router-dom";

class ProfilePage extends Component {
  componentDidMount() {
    document.getElementById("searchContainer").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("searchContainer").style.display = "";
    this.props.change(`Gamer's Pilot`);
  }
  render() {
    const { profileID, users } = this.props;
    console.log(this.props);
    if (users) {
      if (users[profileID]) {
        const userdata = users[profileID];
        this.props.change(`${users[profileID].displayName}`);
        if (users[profileID].favorites) {
          console.log(users[profileID]);
          this.props.change(`${users[profileID].displayName}`);
          const favPath = users[profileID].favorites;
          var favcollection = Object.keys(userdata.favorites);

          return (
            <Grid
              container
              justify="center"
              alignItems="center"
              className="profileAvatar"
            >
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5} align="center">
                {userdata.avatar ? (
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={userdata.avatar}
                  />
                ) : (
                  <img src="https://asalkoleji.com/wp-content/uploads/2019/02/empty_profile_0.png" />
                )}
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card style={{ marginBottom: "10px" }}>
                  <h2 align="center">{userdata.displayName} favorites</h2>
                </Card>

                <Grid container spacing={2}>
                  {favcollection.map(game => {
                    return (
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Card
                          style={{
                            backgroundImage: `url(${favPath[game].pic})`,
                            backgroundSize: "cover",
                            backgroundPositionY: "-50px"
                          }}
                        >
                          <CardContent>
                            <Grid container spacing={0}>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                              >
                                <NavLink
                                  to={{
                                    pathname: "/gameinfo",
                                    gameinfo: `${favPath[game].gameid}`,
                                    gamename: `${favPath[game].gamename}`
                                  }}
                                >
                                  <Box
                                    display="flex"
                                    style={{
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.7)",
                                      width: "100%"
                                    }}
                                  >
                                    <strong>{favPath[game].gamename}</strong>
                                  </Box>
                                </NavLink>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          );
        } else {
          return (
            <Grid container justify="center" alignItems="center">
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5} align="center">
                {userdata.avatar ? (
                  <img src={userdata.avatar} />
                ) : (
                  <img
                    style={{ width: "100%" }}
                    src="https://asalkoleji.com/wp-content/uploads/2019/02/empty_profile_0.png"
                  />
                )}
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card style={{ marginBottom: "10px" }}>
                  <h2 align="center">{userdata.displayName} seems new here</h2>
                </Card>
              </Grid>
            </Grid>
          );
        }
      } else {
        return <p>...pls hold the line2</p>;
      }
    } else {
      return <p>...pls hold the line1</p>;
    }
  }
}

const mapStateProps = state => {
  return {
    users: state.firestore.data.users,
    uid: state.firebase.auth.uid,
    gameDB: state.firestore.data.projects
  };
};
export default compose(
  connect(mapStateProps, null),
  firestoreConnect([{ collection: "projects" }, { collection: "users" }])
)(ProfilePage);
