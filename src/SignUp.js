import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProject } from "./store/actions/projectActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  componentDidMount() {
    document.getElementById("searchContainer").style.display = "none";
  }
  componentWillUnmount() {
    document.getElementById("searchContainer").style.display = "";
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProject(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="container" style={{ height: "100%", width: "100%" }}>
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button>Sign Up</button>
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
export default withRouter(connect(null, mapDispatchToProps)(SignIn));
