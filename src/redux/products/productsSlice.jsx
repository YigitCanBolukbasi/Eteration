import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { unique } from "../../helper/uniqe";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const res = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    return await res.json();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    brandList: [],
    modelList: [],
    filteredItems: [],
    isLoading: false,
    cartItems: [],
    error: null,
  },

  reducers: {
    setBrands: (state) => {
      const carFilter = state.items.map((car) => car.brand);
      state.brandList = unique(carFilter);
    },

    setModels: (state) => {
      const carFilter = state.items.map((car) => car.model);
      state.modelList = unique(carFilter);
    },

    filterItems: (state, action) => {
      const { brandFilters, modelFilters } = action.payload;

      if (brandFilters.length > 0) {
        state.filteredItems = state.items.filter((item) =>
          brandFilters.includes(item.brand)
        );
        state.modelList = unique(state.filteredItems.map((car) => car.model));
      }
      // If brandFilters don't exist, filter by model and update modelList
      else {
        state.filteredItems = state.items;
        state.modelList = unique(state.items.map((car) => car.model));
      }

      // If modelFilters exist, filter by model
      if (modelFilters.length > 0) {
        state.filteredItems = state.filteredItems.filter((item) =>
          modelFilters.includes(item.model)
        );
      }

      // If neither brandFilters nor modelFilters exist, reset the filteredItems and modelList
      if (brandFilters.length === 0 && modelFilters.length === 0) {
        state.filteredItems = state.items;
        let modelFilters = state.items.map((car) => car.model);
        state.modelList = unique(modelFilters);
      }
    },

    sortedByPriceLowToHigh: (state, action) => {
      state.filteredItems = state.filteredItems.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    },
    sortedByPriceHighToLow: (state, action) => {
      state.filteredItems = state.filteredItems.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    },
    sortedByDateOldToNew: (state, action) => {
      state.filteredItems = state.filteredItems.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    },
    sortedByDateNewToOld: (state, action) => {
      state.filteredItems = state.filteredItems.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    },
    handleSelectCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems,
        state.items.filter((cart) => cart.id === action.payload),
      ];
    },
  },
  extraReducers: {
    [getProductsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
      productsSlice.caseReducers.setBrands(state);
      productsSlice.caseReducers.setModels(state);
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});
export const {
  filterItems,
  sortedByPriceLowToHigh,
  sortedByPriceHighToLow,
  sortedByDateOldToNew,
  sortedByDateNewToOld,
  handleSelectCart,
} = productsSlice.actions;
export default productsSlice.reducer;
