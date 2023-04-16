import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import CheckBoX from "../components/CheckBox/CheckBoX";
import Counter from "../components/Buttons/Counter";
import { useSelector, useDispatch } from "react-redux";

const CartBar = ({ cartItems, setCartItems, setTotalPrice, totalPrice }) => {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let price = Number(cartItems[i].price);
    let quantity = Number(cartItems[i].quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
      total += price * quantity;

      setTotalPrice(total);
    }
  }

  return (
    <Grid container spacing={2} direction="column" p={5}>
      <Grid item>
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
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography>Total price: {totalPrice}</Typography>
          <Button variant="contained">Check Out</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CartBar;
