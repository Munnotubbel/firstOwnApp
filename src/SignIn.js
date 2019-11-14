import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { NavLink } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
 
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
  };
  handleChange = e => {
     
    this.setState ({
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
            <button>Login</button>
          </div>
        </form>
        <NavLink to="/signup"><button>Sign Up</button></NavLink>
      </div>
    );
  }
}

export default withRouter(SignIn);
