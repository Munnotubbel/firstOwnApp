import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Vid = ({ gameinfo, index }) => {
  let clips = null;
  if (gameinfo.clip) clips = gameinfo.clip.clips;

  const bildurl = gameinfo.background_image;
  const mov = `mov${gameinfo.id}`;

  const pic = `pic${gameinfo.id}`;

  const titleID = `title${gameinfo.id}`;

  return (
    <Grid container>
      <Typography
        gutterBottom
        className="headlinesBackground gameTitle"
        id={titleID}
        style={{
          position: "absolute",
          marginTop: "-1px",
          zIndex: "2",
          overflowX: "hidden"
        }}
      >
        {gameinfo.name}
      </Typography>

      {clips ? (
        <div>
          <Video
            id={mov}
            controls={["PlayPause", "Time", "Volume", "Fullscreen"]}
            loop={true}
            poster={bildurl}
            title={gameinfo.name}
            onPause={() => {
              document.getElementById(titleID).style.display = "";
            }}
            onPlay={() => {
              document.getElementById(titleID).style.display = "none";
            }}
          >
            <source src={clips[640]} title={gameinfo.name} />
          </Video>{" "}
        </div>
      ) : (
        <div>
          <CardMedia
            id={pic}
            component="img"
            height="100%"
            image={bildurl}
          ></CardMedia>
        </div>
      )}
    </Grid>
  );
};

export default Vid;
