import React, { useEffect } from "react";
import CardX from "../components/Card/CardX";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../redux/products/productsSlice";
import moment from "moment";

function MiddleBody() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.filteredItems);

  const datesConvert = items.map((date) =>
    moment(date?.createdAt).format("DD/MM/YYYY")
  );
  const compareDates = (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  };

  const dateElements = datesConvert.sort(compareDates);

  console.log("sortedDates", dateElements);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <CardX products={items} />
      </Grid>
    </Box>
  );
}

export default MiddleBody;
