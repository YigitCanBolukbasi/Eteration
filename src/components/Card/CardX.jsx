import * as React from "react";
import Card from "@mui/material/Card";
import { Grid, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

const CardX = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product?.price}
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
              <Button size="small" variant="contained">
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CardX;
