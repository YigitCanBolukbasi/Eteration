import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./redux/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
