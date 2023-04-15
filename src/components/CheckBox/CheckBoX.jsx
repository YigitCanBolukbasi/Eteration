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
      <Stack direction="column">
        <TextField
          id="brand-search"
          label="Search"
          value={valueSearch}
          onChange={onChangeSearch}
        />
        {checkBoxData?.map((brand) => (
          <FormControlLabel
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
      </Stack>
    </div>
  );
}

export default CheckBoX;
