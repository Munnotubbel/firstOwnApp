import React from "react";

import { connect } from "react-redux";
import { signOut } from "./store/actions/authActions";
import { NavLink } from "react-router-dom";

const LinkSwitch = props => {
  const { auth } = props;
  console.log(auth);
  function toggleClass(status) {
    var dropBtnID = document.getElementById("lappen");

    if (dropBtnID.className === "") {
      dropBtnID.className = "active";
    } else {
      dropBtnID.className = "";
    }
  }
  return (
    <ul id="lappen" onClick={() => toggleClass("active")}>
      {auth.uid ? (
        <li>
          <a onClick={props.signOut}>Logout</a>
        </li>
      ) : (
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      )}
      {auth.uid ? <li>Account</li> : <li style={{ display: "none" }}></li>}

      {/* <li style={{ background: "red" }}>frei</li> */}
      {auth.uid ? (
        <li style={{ background: "green" }}>
          <img
            className="centerIMG"
            src="https://res.cloudinary.com/munnotubbel/image/upload/v1573760881/gamerspilot/userIcon_jsambb.png"
          />
        </li>
      ) : (
        <li style={{ background: "red" }}>
          <img
            className="centerIMG"
            src="https://res.cloudinary.com/munnotubbel/image/upload/v1573760881/gamerspilot/userIcon_jsambb.png"
          />
        </li>
      )}
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return { auth: state.firebase.auth };
};
export default connect(mapStateToProps, mapDispatchToProps)(LinkSwitch);
