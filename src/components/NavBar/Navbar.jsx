import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  styled,
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
  };

  const handleBlur = (event) => {
    if (event.target.value.length === 1) {
      event.target.focus();
    }
  };

  const Search = styled(TextField)(({ theme }) => ({
    width: "408px",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyledLogo = styled(Box)(({ theme }) => ({}));

  const StyledIcons = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  }));

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
          <StyledLogo>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Eteration
            </Typography>
          </StyledLogo>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Search
                value={valueSearch}
                onChange={handleOnChangeSearch}
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onBlur={handleBlur}
              />
            </Stack>
          </Box>
          <StyledIcons display="flex" alignItems="center">
            <Box sx={{ mr: 3 }} display="flex" alignItems="center">
              <ShoppingCartIcon sx={{ color: "white" }} />
              {totalPrice}
            </Box>
            <Box display="flex" alignItems="center">
              <Person3Icon sx={{ mr: 1, color: "white" }} />
              <Typography variant="subtitle1">Yiğit</Typography>
            </Box>
          </StyledIcons>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
