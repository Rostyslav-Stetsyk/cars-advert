import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  listCars: [],
  isLoading: false,
  error: null,
  noMore: false,
};

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error;
};

const carSlice = createSlice({
  name: "car",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.listCars = [...state.listCars, ...action.payload];
        state.error = null;
        state.isLoading = false;
        if (action.payload.length < 12) {
          state.noMore = true;
        }
      })
      .addCase(getCars.rejected, rejected)
      .addCase(getCars.pending, pending);
  },
});

export const carReduser = carSlice.reducer;
