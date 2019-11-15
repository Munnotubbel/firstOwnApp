import React, { Component } from "react";

import { connect } from "react-redux";
import { createProject } from "./store/actions/projectActions";

class PostComment extends Component {
  state = {
    title: "",
    content: "",
    username: "",
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
    });
  };
  render() {
    return (
      <div className="container" style={{ height: "100%", width: "100%" }}>
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Post a Comment</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              id="content"
              onChange={this.handleChange}
              style={{ width: "250px", height: "100px" }}
            />
          </div>

          <div className="input-field">
            <button>post comment</button>
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
export default connect(null, mapDispatchToProps)(PostComment);
