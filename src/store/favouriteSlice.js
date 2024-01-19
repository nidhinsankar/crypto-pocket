import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    coins: [],
  },
  reducers: {
    addFavouriteCoin: (state, action) => {
      state.coins.push(action.payload);
    },
  },
});

export const { addFavouriteCoin } = favouriteSlice.actions;
export default favouriteSlice.reducer;
