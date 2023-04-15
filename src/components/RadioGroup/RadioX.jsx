import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  sortedByPriceLowToHigh,
  sortedByPriceHighToLow,
  sortedByDateOldToNew,
  sortedByDateNewToOld,
} from "../../redux/products/productsSlice";

function RadioX() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.filteredItems);

  const RadioXData = [
    {
      name: "oldToNew",
      label: "Old To New",
    },
    {
      name: "newToOld",
      label: "New To Old",
    },
    {
      name: "priceHighToLow",
      label: "Price High To Low",
    },
    {
      name: "priceLowToHigh",
      label: "Price Low To High",
    },
  ];

  const handleOnChange = (e) => {
    switch (e.target?.value) {
      case "priceLowToHigh":
        dispatch(sortedByPriceLowToHigh());
        break;
      case "priceHighToLow":
        dispatch(sortedByPriceHighToLow());
        break;
      case "oldToNew":
        dispatch(sortedByDateOldToNew());
        break;
      case "newToOld":
        dispatch(sortedByDateNewToOld());
        break;
      default:
        console.log("empty");
        break;
    }
    if (e.target.value === "priceLowToHigh") {
      dispatch(sortedByPriceLowToHigh());
    }
  };

  return (
    <div>
      <RadioGroup>
        {RadioXData.map((x) => (
          <FormControlLabel
            value={x.name}
            control={<Radio />}
            label={x.label}
            onChange={(e) => handleOnChange(e)}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default RadioX;
