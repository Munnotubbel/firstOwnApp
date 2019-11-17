import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "./store/actions/authActions";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    document.getElementById("searchContainer").style.display = "none";
  }
  componentWillUnmount() {
    document.getElementById("searchContainer").style.display = "";
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  loginAction = () => {
    const { auth } = this.props;

    if (auth.uid != null) {
      console.log("login accepted- forward page");
    }
  };
  render() {
    const { history } = this.props;
    const { auth } = this.props;
    if (auth.uid) {
      history.goBack();
    }
    console.log(this.props);
    const { authError } = this.props;

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
            <button onClick={() => this.loginAction()}>Login</button>
          </div>
        </form>
        <NavLink to="/signup">
          <button>Sign Up</button>
        </NavLink>
        <div style={{ fontSize: "20px" }}>
          {authError ? <p>{authError}</p> : null}
        </div>
      </div>
    );
  }
}

const mapStateProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default withRouter(connect(mapStateProps, mapDispatchToProps)(SignIn));
