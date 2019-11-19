import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProject } from "./store/actions/projectActions";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class PostComment extends Component {
  state = {
    title: "",
    content: "",
    gameid: "",
    slug: "",
    purpose: "comment"
  };
  componentDidMount() {
    document.getElementById("searchContainer").style.display = "none";
  }
  componentWillUnmount() {
    document.getElementById("searchContainer").style.display = "";
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.createProject(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      gameid: this.props.gameid,
      slug: this.props.slug
      // username: this.props.auth.
    });
  };
  render() {
    console.log(this.props);

    const { auth, profile } = this.props;

    return (
      <div className="container" style={{ height: "100%", width: "100%" }}>
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Post a Comment</h5>
          {/* <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div> */}
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              className="titleInput"
              type="text"
              id="title"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <input
              className="contentInput"
              type="text"
              id="content"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-field">
            {auth.uid ? (
              <button>post comment</button>
            ) : (
              <NavLink to="/signin">signin to post comment</NavLink>
            )}
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(PostComment)
);
