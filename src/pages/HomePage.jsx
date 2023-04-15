import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Button, Grid } from "@mui/material";
import CartBar from "../layouts/CartBar";
import FilterNavbar from "../layouts/FilterNavbar";
import Content from "../layouts/Content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [cartItems, setCartItems] = useState(() => {
    var dataJson = localStorage.getItem("cartItems");
    var dataNesne = JSON.parse(dataJson);
    return dataNesne || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <Grid container paddingX={"100px"} xs={12}>
        <Grid item xs={3}>
          <FilterNavbar />
        </Grid>
        <Grid item xs={7} paddingTop={7}>
          <Content cartItems={cartItems} setCartItems={setCartItems} />
        </Grid>
        <Grid item xs={2}>
          <CartBar cartItems={cartItems} setCartItems={setCartItems} />
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default HomePage;
