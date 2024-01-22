import { createSlice } from "@reduxjs/toolkit";

const initialState = { favoriteCars: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const index = state.favoriteCars.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (index !== -1) {
        state.favoriteCars.splice(index, 1);
      } else {
        state.favoriteCars.push(action.payload);
      }
    },
  },
});

export const toggleFavorite = favoriteSlice.actions.toggleFavorite;
export const favoriteReducer = favoriteSlice.reducer;
