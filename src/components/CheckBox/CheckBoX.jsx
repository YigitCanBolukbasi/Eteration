import React from "react";
import { Stack, FormControlLabel, Typography, Checkbox } from "@mui/material";

function CheckBoX({ checkBoxData, handleOnChange }) {
  return (
    <div>
      <Stack direction="column">
        <Typography>Search</Typography>
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
