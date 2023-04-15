import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function Counter({ cart, setCartItems, cartItems, hideName }) {
  const handleContainerUp = () => {
    const newCartItems = [...cartItems];

    newCartItems[newCartItems.indexOf(cart)] = {
      ...cart,
      quantity: cart.quantity + 1,
    };

    setCartItems(newCartItems);
  };
  const handleContainerDown = () => {
    const newCartItems = [...cartItems];

    newCartItems[newCartItems.indexOf(cart)] = {
      ...cart,
      quantity: cart.quantity > 0 ? cart.quantity - 1 : cart.quantity,
    };

    const totalPriceZero = newCartItems.filter((x) => x.id !== cart.id);
    cart.quantity === 1
      ? setCartItems(totalPriceZero)
      : setCartItems(newCartItems);

    console.log(totalPriceZero, "delete");
  };

  return (
    <Stack direction="row" alignItems="center">
      {!hideName && (
        <Stack direction="column" alignItems="center">
          <Typography>{cart.name}</Typography>
          <Typography>{cart.price}</Typography>
        </Stack>
      )}
      <Stack direction="row" alignItems="center">
        <Button variant="contained" onClick={handleContainerDown}>
          -
        </Button>
        <Typography>{cart.quantity}</Typography>
        <Button variant="contained" onClick={handleContainerUp}>
          +
        </Button>
      </Stack>
    </Stack>
  );
}

export default Counter;
