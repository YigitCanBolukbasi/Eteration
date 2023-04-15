import React, { useEffect, useState } from "react";
import CardX from "../components/Card/CardX";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../redux/products/productsSlice";

function MiddleBody({ cartItems, setCartItems }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.filteredItems);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <CardX
          products={items}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onAddCardClick={(product) => {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
          }}
        />
      </Grid>
    </Box>
  );
}

export default MiddleBody;
