import { Button, Stack, Typography, styled } from "@mui/material";
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
  };

  const StyledButton = styled(Button)((props) => ({
    color: "black",
    background: "white",
  }));

  return (
    <Stack direction="row" alignItems="center">
      {!hideName && (
        <Stack direction="column" alignItems="center">
          <Typography>{cart.name}</Typography>
          <Typography>{cart.price}</Typography>
        </Stack>
      )}
      <Stack direction="row" alignItems="center">
        <StyledButton variant="contained" onClick={handleContainerDown}>
          -
        </StyledButton>
        <Typography
          sx={{
            width: "20px",
            height: "20px",
            background: "#2A59FE",
            padding: "20px",
            color: "white",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cart.quantity}
        </Typography>
        <StyledButton variant="contained" onClick={handleContainerUp}>
          +
        </StyledButton>
      </Stack>
    </Stack>
  );
}

export default Counter;
