import { configureStore } from "@reduxjs/toolkit";
import { carReduser } from "./carSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    carSlice: carReduser,
    filter: filterReducer,
  },
});
