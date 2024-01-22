import { configureStore } from "@reduxjs/toolkit";
import { carReduser } from "./carSlice";
import { filterReducer } from "./filterSlice";
import { favoriteReducer } from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    carSlice: carReduser,
    filterSlice: filterReducer,
    favoriteSlice: favoriteReducer,
  },
});
