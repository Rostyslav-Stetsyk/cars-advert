import { configureStore } from "@reduxjs/toolkit";
import { carReduser } from "./carSlice";

export const store = configureStore({
  reducer: {
    car: carReduser,
  },
});
