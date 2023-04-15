import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import CheckBoX from "../components/CheckBox/CheckBoX";
import Counter from "../components/Buttons/Counter";

const RightSide = () => {
  return (
    <Grid container spacing={2} direction="column" p={5}>
      <Typography>Cart</Typography>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Counter />
          <Counter />
          <Counter />
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography>Total price: 117 000</Typography>
          <Button variant="contained">Check Out</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightSide;
