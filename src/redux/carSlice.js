import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, () => {})
      .addCase(getCars.rejected, () => {})
      .addCase(getCars.pending, () => {});
  },
});

export const carReduser = carSlice.reducer;
