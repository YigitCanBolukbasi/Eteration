import * as React from "react";
import Card from "@mui/material/Card";
import { Grid, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { toast } from "react-toastify";
import Counter from "../Buttons/Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  handleDetail,
  handleOpenDetail,
} from "../../redux/products/productsSlice";

const CarCards = ({ products, cartItems, setCartItems, onAddCardClick }) => {
  const dispatch = useDispatch();
  const cartItemIds = cartItems?.map((item) => {
    return item.id;
  });

  const handleOnClick = (product) => {
    onAddCardClick(product);
    toast("You have successfully added a car to your cart.");
  };

  const handleSendToDetail = (product) => {
    dispatch(handleDetail(product));
    dispatch(handleOpenDetail());
  };

  return (
    <>
      {products?.map((product) => {
        const cartItem = cartItems.find((item) => {
          return item.id === product.id;
        });
        return (
          <Grid item xs={3}>
            <Card>
              <CardMedia
                onClick={() => handleSendToDetail(product)}
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent onClick={() => handleSendToDetail(product)}>
                <Typography
                  sx={{
                    color: "#2A59FE",
                    fontSize: "14px",
                    lineHeight: "17.07px",
                  }}
                >
                  {product?.price} ₺
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {moment(product?.createdAt).format("DD/MM/YYYY")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.model}
                </Typography>
              </CardContent>
              <CardActions>
                {cartItem ? (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "100%" }}
                  >
                    <Counter
                      cart={cartItem}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      hideName
                    />
                  </Stack>
                ) : (
                  <Button
                    onClick={() => {
                      handleOnClick(product);
                    }}
                    size="small"
                    variant="contained"
                  >
                    {cartItemIds?.includes(product.id)
                      ? "Added"
                      : "Add To Cart"}
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default CarCards;
