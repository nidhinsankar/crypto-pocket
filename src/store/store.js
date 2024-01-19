import { configureStore } from "@reduxjs/toolkit";
import { coinsApi } from "../api/coins";
import favouriteSlice from "./favouriteSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    favourites: favouriteSlice,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

export default store;
