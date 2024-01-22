import { configureStore } from "@reduxjs/toolkit";
import { carReduser } from "./carSlice";
import { filterReducer } from "./filterSlice";
import { favoriteReducer } from "./favoriteSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    carSlice: carReduser,
    filterSlice: filterReducer,
    favoriteSlice: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
