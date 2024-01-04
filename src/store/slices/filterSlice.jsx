import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchTerm: "",
    priceRange: {
      minPrice: "",
      maxPrice: "",
    },
    filteredData: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setSearchTerm, setPriceRange, setFilteredData } =
  filterSlice.actions;

export default filterSlice.reducer;
