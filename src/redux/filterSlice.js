import { createSlice } from "@reduxjs/toolkit";

const initialState = { make: "", page: 1 };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.make = action.payload.make;
      state.page = action.payload.page;
    },
  },
});

export const changeFilter = filterSlice.actions.changeFilter;
export const filterReducer = filterSlice.reducer;
