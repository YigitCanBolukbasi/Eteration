import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import RadioX from "../components/RadioGroup/RadioX";
import CheckBoX from "../components/CheckBox/CheckBoX";
import { useDispatch, useSelector } from "react-redux";
import { filterItems, sortedByPrice } from "../redux/products/productsSlice";

const LeftSide = () => {
  const dispatch = useDispatch();
  const brandsData = useSelector((state) => state.products.brandList);
  const modelData = useSelector((state) => state.products.modelList);
  const [brandFilters, setBrandFilters] = useState([]);
  const [modelFilters, setModelFilters] = useState([]);

  useEffect(() => {
    dispatch(
      filterItems({ brandFilters: brandFilters, modelFilters: modelFilters })
    );
  }, [brandFilters, modelFilters]);

  return (
    <Grid container spacing={2} direction="column" p={5}>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <RadioX />
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <CheckBoX
            checkBoxData={brandsData}
            handleOnChange={(checked, brand) => {
              if (checked) {
                setBrandFilters([...brandFilters, brand]);
              } else {
                setBrandFilters(
                  brandFilters.filter((filter) => filter !== brand)
                );
              }
            }}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="p">sort by</Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <CheckBoX
            checkBoxData={modelData}
            handleOnChange={(checked, brand) => {
              if (checked) {
                setModelFilters([...modelFilters, brand]);
              } else {
                setModelFilters(
                  modelFilters.filter((filter) => filter !== brand)
                );
              }
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LeftSide;
