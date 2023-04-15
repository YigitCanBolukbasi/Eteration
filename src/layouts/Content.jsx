import React, { useEffect, useState } from "react";
import CarCards from "../components/CarCards/CarCards";
import { Box, Grid, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../redux/products/productsSlice";

const Content = ({ cartItems, setCartItems }) => {
  const dispatch = useDispatch();
  const itemsPerPage = 12; // Her sayfada gösterilecek ürün sayısı
  const [currentPage, setCurrentPage] = useState(1);
  const items = useSelector((state) => state.products.filteredItems);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Sayfa başına öğeleri filtrelemek için bir fonksiyon oluşturun
  const filterItemsPerPage = (items, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items?.slice(startIndex, endIndex);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <CarCards
          products={filterItemsPerPage(items, currentPage)}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onAddCardClick={(product) => {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
          }}
        />
      </Grid>
      <Pagination
        count={Math.ceil(items?.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
      />
    </Box>
  );
};

export default Content;
