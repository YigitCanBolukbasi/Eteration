import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, TextField } from "@mui/material";
import RadioX from "../components/RadioGroup/RadioX";
import CheckBoX from "../components/CheckBox/CheckBoX";
import { useDispatch, useSelector } from "react-redux";
import { filterItems, sortedByPrice } from "../redux/products/productsSlice";

const FilterNavbar = () => {
  const dispatch = useDispatch();
  const brandsData = useSelector((state) => state.products.brandList);
  const modelData = useSelector((state) => state.products.modelList);
  const [brandFilters, setBrandFilters] = useState([]);
  const [modelFilters, setModelFilters] = useState([]);
  const [brandSearchTerm, setBrandSearchTerm] = useState("");
  const [modelSearchTerm, setModelSearchTerm] = useState("");

  useEffect(() => {
    dispatch(
      filterItems({ brandFilters: brandFilters, modelFilters: modelFilters })
    );
  }, [brandFilters, modelFilters]);

  const handleBrandSearch = (event) => {
    setBrandSearchTerm(event.target.value);
  };

  const handleModelSearch = (event) => {
    setModelSearchTerm(event.target.value);
  };

  const filteredBrandData = brandsData.filter((brand) =>
    brand.toLowerCase().includes(brandSearchTerm.toLowerCase())
  );

  const filteredModelData = modelData.filter((model) =>
    model.toLowerCase().includes(modelSearchTerm.toLowerCase())
  );

  return (
    <Grid container spacing={2} direction="column" p={5}>
      <Grid item>
        <Typography variant="body2" color="text.secondary">
          sort by
        </Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <RadioX />
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="text.secondary">
          Brands
        </Typography>
        <Paper
          elevation={3}
          style={{ padding: "16px", maxHeight: "300px", overflow: "scroll" }}
        >
          <CheckBoX
            valueSearch={brandSearchTerm}
            onChangeSearch={handleBrandSearch}
            checkBoxData={filteredBrandData}
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
        <Typography variant="body2" color="text.secondary">
          Model
        </Typography>
        <Paper
          elevation={3}
          style={{ padding: "16px", maxHeight: "300px", overflow: "scroll" }}
        >
          <CheckBoX
            valueSearch={modelSearchTerm}
            onChangeSearch={handleModelSearch}
            checkBoxData={filteredModelData}
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

export default FilterNavbar;
