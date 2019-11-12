import React, { Component } from "react";
import Platform from "./Platform";
import { NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

class PlatformSelect extends Component {
  state = {
    loading: false,
    platforms: [
      {
        id: 1,
        name: "PC",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/windows_l1jv86.png"
      },
      {
        id: 2,
        name: "Playstation",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/playstation_gha6db.png"
      },
      {
        id: 3,
        name: "Xbox",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056925/gamerspilot/xbox_lczfio.png"
      },

      {
        id: 4,
        name: "iOS",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/iOS_eswdbt.png"
      },

      {
        id: 5,
        name: "Apple Mac",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/apple_qdo0bs.png"
      },

      {
        id: 6,
        name: "Linux",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/linux_hmel9y.png"
      },

      {
        id: 7,
        name: "Nintendo",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/nintendo_jttzpt.png"
      },

      {
        id: 8,
        name: "Android",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/android_xsbckp.png"
      },

      {
        id: 9,
        name: "Atari",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/atari_wz0btg.png"
      },

      {
        id: 10,
        name: "Commodore",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/commodore_o10jkq.png"
      },

      {
        id: 11,
        name: "Sega",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/playstation_gha6db.png"
      },

      {
        id: 13,
        name: "3DO",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/3do_tgt0vr.png"
      },

      {
        id: 14,
        name: "Web",
        url:
          "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/browser_p8z5rw.png"
      }
    ]
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container direction="row" justify="center" alignItems="center">
          {this.state.platforms.map((platform, index) => (
            <Grid item align="center" xs={6} sm={4} md={3} lg={2} xl={2}>
              <NavLink
                key={index}
                style={{ textDecoration: "none" }}
                to={{ pathname: "/genres", platform: { id: `${platform.id}` } }}
              >
                <Platform platform={platform}></Platform>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default PlatformSelect;
