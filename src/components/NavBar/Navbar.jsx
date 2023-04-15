import React from "react";
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

const Appbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexGrow: 1 }}
        >
          <Stack direction="row" alignItems="center" spacing={6}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Eteration
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
              />
              <IconButton color="inherit" aria-label="search">
                <Search />
              </IconButton>
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
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
