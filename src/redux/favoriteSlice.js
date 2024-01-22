import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "favorite",
  storage: storage,
};

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
export const favoriteReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
