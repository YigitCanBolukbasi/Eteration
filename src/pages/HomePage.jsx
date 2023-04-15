import React, { useEffect } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Button, Grid } from "@mui/material";
import Rigthside from "../layouts/Rightside";
import Leftside from "../layouts/Leftside";
import MiddleBody from "../layouts/MiddleBody";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Grid container paddingX={"100px"} xs={12}>
        <Grid item xs={3}>
          <Leftside />
        </Grid>
        <Grid item xs={7} paddingTop={7}>
          <MiddleBody />
        </Grid>
        <Grid item xs={2}>
          <Rigthside />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
