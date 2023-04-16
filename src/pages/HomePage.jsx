import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Grid } from "@mui/material";
import CartBar from "../layouts/CartBar";
import FilterNavbar from "../layouts/FilterNavbar";
import Content from "../layouts/Content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailPage from "./DetailPage";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const detailOpen = useSelector((state) => state.products.detailOpen);
  const [cartItems, setCartItems] = useState(() => {
    var dataJson = localStorage.getItem("cartItems");
    var dataNesne = JSON.parse(dataJson);
    return dataNesne || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    cartItems.length === 0 && setTotalPrice(0);
  }, [cartItems]);

  return (
    <>
      <Navbar totalPrice={totalPrice} />
      <Grid container paddingX={"100px"} xs={12}>
        {detailOpen ? (
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <DetailPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAddCardClick={(product) => {
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
              }}
            />
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <FilterNavbar />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} paddingTop={7}>
              <Content cartItems={cartItems} setCartItems={setCartItems} />
            </Grid>
          </>
        )}

        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <CartBar
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default HomePage;
