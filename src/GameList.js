import React from "react";
import Vid from "./Vid";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const GameList = gameinfo => {
  const { ratings } = gameinfo;
  const videoID = `"vid"${gameinfo.id}`;

  return (
    <Card style={{ margin: "5px" }}>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Vid key={videoID} gameinfo={gameinfo}></Vid>
          </Grid>

          <Grid item xs={8} sm={9}>
            <Box
              display="flex"
              style={{
                height: "30px",
                border: "0px solid black",
                borderRadius: "5px"
              }}
            >
              {ratings[0] ? (
                <div
                  class
                  style={{
                    backgroundColor: "green",
                    width: `${ratings[0].percent}%`
                  }}
                >
                  {ratings[0].count}
                </div>
              ) : (
                <div></div>
              )}
              {ratings[1] ? (
                <div
                  style={{
                    backgroundColor: "blue",
                    width: `${ratings[1].percent}%`
                  }}
                >
                  {ratings[1].count}
                </div>
              ) : (
                <div></div>
              )}
              {ratings[2] ? (
                <div
                  style={{
                    backgroundColor: "yellow",
                    width: `${ratings[2].percent}%`
                  }}
                >
                  {ratings[2].count}
                </div>
              ) : (
                <div></div>
              )}
              {ratings[3] ? (
                <div
                  style={{
                    backgroundColor: "red",
                    width: `${ratings[3].percent}%`
                  }}
                >
                  {ratings[3].count}
                </div>
              ) : (
                <div></div>
              )}
            </Box>
          </Grid>

          <Grid item align="right" xs={4} sm={3}>
            {gameinfo.rating ? gameinfo.rating : ""}
          </Grid>

          <Grid item xs={10} sm={10}>
            {ratings[0] ? (
              <Box>
                <span className="dotgreen"></span>
                <p className="ratingtext">Exceptional</p>
                <span className="dotblue"></span>
                <p className="ratingtext">Recommended</p>
                <span className="dotyellow"></span>
                <p className="ratingtext">Meh</p>
                <span className="dotred"></span>
                <p className="ratingtext">Skip</p>
              </Box>
            ) : (
              <Box display="flex"></Box>
            )}
          </Grid>

          <Grid item xs={2} sm={2} justify="flex-end">
            <NavLink
              to={{
                pathname: "/gameinfo",
                gameinfo: `${gameinfo.id}`,
                gamename: `${gameinfo.name}`
              }}
            >
              <img
                className="infoStretch"
                width="35px"
                height="35x"
                alt="infoButton"
                src="https://img.icons8.com/ios/50/000000/info.png"
              />
            </NavLink>
          </Grid>
        </Grid>{" "}
      </CardContent>
    </Card>
  );
};

export default GameList;
