import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { signOut } from "./store/actions/authActions";
import { NavLink } from "react-router-dom";

const LinkSwitch = props => {
  const { auth, profile } = props;

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
      {auth.uid ? (
        <li>
          <NavLink
            to={{
              pathname: "/profilepage",
              profileID: `${props.auth.uid}`
            }}
          >
            {" "}
            Account
          </NavLink>
        </li>
      ) : (
        <li style={{ display: "none" }}></li>
      )}

      {/* <li style={{ background: "red" }}>frei</li> */}
      {auth.uid ? (
        <li justify="center" alignItems="center">
          {profile.avatar ? (
            <Avatar className="centerIMG" alt="avatar" src={profile.avatar} />
          ) : (
            <Avatar style={{ background: "green", color: "white" }}>
              {profile.initials}
            </Avatar>
          )}
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
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LinkSwitch);
