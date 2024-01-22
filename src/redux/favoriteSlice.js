import { createSlice } from "@reduxjs/toolkit";

const initialState = { favoritecars: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      state.make = action.payload.make;
      state.page = action.payload.page;
    },
  },
});

export const toggleFavorite = favoriteSlice.actions.toggleFavorite;
export const favoriteReducer = favoriteSlice.reducer;
