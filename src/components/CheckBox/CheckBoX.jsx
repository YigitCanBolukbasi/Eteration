import React from "react";
import { Stack, FormControlLabel, Checkbox, TextField } from "@mui/material";

function CheckBoX({
  checkBoxData,
  handleOnChange,
  valueSearch,
  onChangeSearch,
}) {
  return (
    <div>
      <TextField
        id="brand-search"
        label="Search"
        sx={{ width: "100%" }}
        value={valueSearch}
        onChange={onChangeSearch}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "200px",
          overflow: "scroll",
        }}
      >
        {checkBoxData?.map((brand) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                onChange={(e) => {
                  handleOnChange(e.target.checked, brand);
                }}
              />
            }
            label={brand}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckBoX;
