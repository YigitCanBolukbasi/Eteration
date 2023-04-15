import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand } from "../../redux/products/productsSlice";

function RadioX() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);

  const RadioXData = [
    {
      name: "option 1",
      label: "option 1",
    },
    {
      name: "option 2",
      label: "option 2",
    },
    {
      name: "option 3",
      label: "option 3",
    },
    {
      name: "option 4",
      label: "option 4",
    },
  ];
  return (
    <div>
      <RadioGroup>
        {RadioXData.map((x) => (
          <FormControlLabel
            value={x.name}
            control={<Radio />}
            label={x.label}
            onChange={(e) => {
              console.log("a", e.target.value);
            }}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default RadioX;
