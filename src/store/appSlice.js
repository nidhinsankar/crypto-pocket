import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    searchCoin: "",
    currency: "",
    sortType: "",
  },
  reducers: {
    addSearchText: (state, action) => {
      state.searchCoin = action.payload;
    },
    addCurrency: (state, action) => {
      state.currency = action.payload;
    },
    addSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { addCurrency, addSearchText, addSortType } = appSlice.actions;
export default appSlice.reducer;
