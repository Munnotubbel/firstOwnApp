import React from "react";
import Grid from "@material-ui/core/Grid";

const imgRef = {
  PC:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-windows-8-52_xqr5th.png",
  PlayStation:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-playstation-100_fou2tx.png",
  Xbox:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-xbox-50_u1qjmw.png",
  iOS:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-ios-logo-50_jxa71q.png",
  "Apple Macintosh":
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-mac-os-50_noxr06.png",
  Linux:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-linux-50_wsjc0h.png",
  Nintendo:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-nintendo-50_o7dxzz.png",
  Android:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721561/gamerspilot/icons8-android-betriebssystem-50_zaeood.png",
  Atari:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721560/gamerspilot/icons8_atari_ipyneb.png",
  "Commodore / Amiga":
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721560/gamerspilot/icons8_commodore_db6bpp.png",
  SEGA:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721560/gamerspilot/icons8_sega_xtsybu.png",
  "3DO":
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721560/gamerspilot/icons8_3do_r8fbac.png",
  Web:
    "https://res.cloudinary.com/munnotubbel/image/upload/v1573721560/gamerspilot/icons8_internetbrowser_ph6cso.png"
};
const PlatformAvailable = ({ gameinfo }) => {
  const { parent_platforms } = gameinfo;

  return (
    <Grid container spacing={2} direction="row" justify="center">
      {parent_platforms &&
        parent_platforms.map(platform => {
          let name = platform.platform.name;

          return (
            <Grid item align="center" xs={2} sm={2} md={2} lg={2} xl={2}>
              <img
                style={{ height: "30px" }}
                src={imgRef[name]}
                alt={name}
              ></img>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default PlatformAvailable;
