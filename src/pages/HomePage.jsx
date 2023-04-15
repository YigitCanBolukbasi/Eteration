import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Button, Grid } from "@mui/material";
import Rigthside from "../layouts/Rightside";
import Leftside from "../layouts/Leftside";
import MiddleBody from "../layouts/MiddleBody";
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
          <Leftside />
        </Grid>
        <Grid item xs={7} paddingTop={7}>
          <MiddleBody cartItems={cartItems} setCartItems={setCartItems} />
        </Grid>
        <Grid item xs={2}>
          <Rigthside cartItems={cartItems} setCartItems={setCartItems} />
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default HomePage;
