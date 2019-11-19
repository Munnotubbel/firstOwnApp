import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProject } from "./store/actions/projectActions";
import { signUp } from "./store/actions/authActions";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    displayName: "",
    avatar: ""
  };
  componentDidMount() {
    document.getElementById("searchContainer").style.display = "none";
  }
  componentWillUnmount() {
    document.getElementById("searchContainer").style.display = "";
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { history } = this.props;
    const { auth, authError } = this.props;
    console.log(this.props);
    if (auth.uid) {
      history.goBack();
    }

    return (
      <div className="container" style={{ height: "100%", width: "100%" }}>
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign In</h5>

          <div className="input-field">
            <label htmlFor="displayName">Nickname</label>
            <input type="text" id="displayName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="avatar">Avatar</label>
            <input type="url" id="avatar" onChange={this.handleChange} />
          </div>

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
        {authError ? <h4>{authError}</h4> : null}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
const mapStateProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
export default withRouter(connect(mapStateProps, mapDispatchToProps)(SignIn));
