import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { addFavorite } from "./store/actions/favoriteAction";
import { NavLink } from "react-router-dom";

class AddToFavorite extends Component {
  state = {
    isOrisNot: "ja"
  };
  handleChange = answer => {
    this.props.addFavorite({
      isFavorite: answer,
      slug: this.props.slug,
      gameid: this.props.gameid,
      gamename: this.props.gamename,
      pic: this.props.pic
    });
    this.setState({ isOrisNot: answer }, () => console.log("is changed"));
  };

  render() {
    const { slug, uid, users } = this.props;
    console.log(this.props);
    if (users) {
      if (users[uid]) {
        if (users[uid].favorites) {
          if (users[uid].favorites[slug]) {
            if (users[uid].favorites[slug].isFavorite === "ja") {
              return <FavoriteIcon onClick={() => this.handleChange("nein")} />;
            } else {
              return (
                <FavoriteBorderIcon onClick={() => this.handleChange("ja")} />
              );
            }
          } else {
            return (
              <FavoriteBorderIcon onClick={() => this.handleChange("ja")} />
            );
          }
        } else {
          return <FavoriteBorderIcon onClick={() => this.handleChange("ja")} />;
        }
      } else {
        return (
          <NavLink to="/signin">
            <FavoriteBorderIcon />
          </NavLink>
        );
      }
    } else {
      return (
        <NavLink to="/signin">
          <FavoriteBorderIcon />
        </NavLink>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: answer => dispatch(addFavorite(answer))
  };
};

const mapStateProps = state => {
  return {
    users: state.firestore.data.users,
    uid: state.firebase.auth.uid,
    gameDB: state.firestore.data.projects
  };
};
export default compose(
  connect(mapStateProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }, { collection: "users" }])
)(AddToFavorite);
