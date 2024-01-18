import { configureStore } from "@reduxjs/toolkit";
import { coinsApi } from "../api/coins";
import favouriteSlice from "./favouriteSlice";

const store = configureStore({
  reducer: {
    favourites: favouriteSlice,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

export default store;
