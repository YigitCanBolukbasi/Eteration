import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import CheckBoX from "../components/CheckBox/CheckBoX";
import Counter from "../components/Buttons/Counter";
import { useSelector, useDispatch } from "react-redux";

const RightSide = ({ cartItems, setCartItems }) => {
  var toplam = 0;
  for (var i = 0; i < cartItems.length; i++) {
    var price = Number(cartItems[i].price);
    var quantity = Number(cartItems[i].quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
      toplam += price * quantity;
    }
  }

  return (
    <Grid container spacing={2} direction="column" p={5}>
      <Typography>Cart</Typography>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          {cartItems?.map((cart) => {
            return (
              <Counter
                cart={cart}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            );
          })}
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography>Total price: {toplam}</Typography>
          <Button variant="contained">Check Out</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightSide;
