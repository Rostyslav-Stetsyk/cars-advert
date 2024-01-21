import { createSlice } from "@reduxjs/toolkit";

const initialState = { make: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.make = action.payload.make;
    },
  },
});

export const changeFilter = filterSlice.actions.changeFilter;
export const filterReducer = filterSlice.reducer;
