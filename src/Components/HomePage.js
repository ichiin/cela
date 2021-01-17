import React from "react";
import "../Style/HomePage.css";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

export default function HomePage() {
  return (
    <Grid container id={"pageBackgroundImage"} spacing={8}>
      <Grid
        item
        xs={6}
        container
        id={"blackOverlay"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={10}>
          <h1>Learning Agreement Generating Form</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>
            Fill out your information and the courses you wish to take to
            generate an Erasmus Learning agreement
          </h2>
        </Grid>
        <Grid item xs={12} id={"buttonStartHolder"}>
          <Link to={"/Registration"}>
            <Button variant={"contained"} id={"buttonStart"}>
              Get started !
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
