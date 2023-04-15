import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { handleCloseDetail } from "../redux/products/productsSlice";
import Counter from "../components/Buttons/Counter";
import { toast } from "react-toastify";

function DetailPage({ cartItems, setCartItems, onAddCardClick }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.detailData);

  const cartItemIds = cartItems?.map((item) => {
    return item.id;
  });

  const cartItem = cartItems.find((item) => {
    return item.id === product.id;
  });

  const handleOnClick = (product) => {
    onAddCardClick(product);
    toast("You have successfully added a car to your cart.");
  };

  return (
    <div>
      <IconButton onClick={() => dispatch(handleCloseDetail())}>
        <ArrowBackIcon />
      </IconButton>
      <Paper elevation={3} style={{ padding: "16px", margin: "48px" }}>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt={product?.name}
              height="140"
              image={product?.image}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>{product?.name}</Typography>
            <Typography>{product?.price}</Typography>

            {cartItem ? (
              <Counter
                cart={cartItem}
                cartItems={cartItems}
                setCartItems={setCartItems}
                hideName
              />
            ) : (
              <Button
                onClick={() => {
                  handleOnClick(product);
                }}
                size="small"
                variant="contained"
              >
                {cartItemIds?.includes(product.id) ? "Added" : "Add To Cart"}
              </Button>
            )}

            <Typography>{product?.description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default DetailPage;
