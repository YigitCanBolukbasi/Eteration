import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import { Search, Menu } from "@mui/icons-material";
import Person3Icon from "@mui/icons-material/Person3";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { handleSearch } from "../../redux/products/productsSlice";

const Appbar = ({ totalPrice }) => {
  const [valueSearch, setValueSearch] = useState();
  const dispatch = useDispatch();

  const handleOnChangeSearch = (e) => {
    setValueSearch(e.target.value);
    dispatch(handleSearch(e.target.value));
    console.log("search", valueSearch);
  };

  return (
    <AppBar sx={{ background: "#2A59FE" }} position="static">
      <Toolbar>
        <Stack
          direction="row"
          paddingX={15}
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexGrow: 1 }}
        >
          <Box>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Eteration
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <TextField
                value={valueSearch}
                onChange={handleOnChangeSearch}
                id="outlined-basic"
                label="Search"
                sx={{ width: "408px", backgroundColor: "white" }}
                variant="outlined"
              />
            </Stack>
          </Box>
          <Box display="flex" alignItems="center">
            <Box sx={{ mr: 3 }} display="flex" alignItems="center">
              <ShoppingCartIcon sx={{ color: "white" }} />
              {totalPrice}
            </Box>
            <Box display="flex" alignItems="center">
              <Person3Icon sx={{ mr: 1, color: "white" }} />
              <Typography variant="subtitle1">Yiğit</Typography>
            </Box>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

{
  /* <Stack direction="row" alignItems="center" spacing={6}>

<Box sx={{ flexGrow: 1 }}>
  <Stack direction="row" alignItems="center" spacing={2}>
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      size="small"
      sx={{ backgroundColor: "white" }}
    />
    <IconButton color="inherit" aria-label="search">
      <Search />
    </IconButton>
  </Stack>
</Box>
</Stack>
<Box display="flex" alignItems="center">
<Box sx={{ mr: 3 }}>
  <ShoppingCartIcon />
  117000
</Box>
<Box display="flex" alignItems="center">
  <Person3Icon sx={{ mr: 1 }} />
  <Typography variant="subtitle1">Yiğit</Typography>
</Box>
</Box> */
}
