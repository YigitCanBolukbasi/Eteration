import React from "react";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
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
          <Stack direction="row" alignItems="center">
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Total Price:
            </Typography>
            <Typography
              sx={{ color: "#2A59FE", fontSize: "14px", fontWeight: "700" }}
            >
              {totalPrice}₺
            </Typography>
          </Stack>

          <Button variant="contained">Check Out</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CartBar;
