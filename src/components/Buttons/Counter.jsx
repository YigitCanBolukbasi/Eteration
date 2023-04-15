import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleContainerUp = () => {
    setCounter(counter + 1);
  };
  const handleContainerDown = () => {
    setCounter(counter - 1);
  };

  return (
    <Stack direction="row" alignItems="center">
      <Stack direction="column" alignItems="center">
        <Typography>Samsung</Typography>
        <Typography>16400</Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Button variant="contained" onClick={handleContainerDown}>
          -
        </Button>
        <Typography>{counter}</Typography>
        <Button variant="contained" onClick={handleContainerUp}>
          +
        </Button>
      </Stack>
    </Stack>
  );
}

export default Counter;
