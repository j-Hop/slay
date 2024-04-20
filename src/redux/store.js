import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { nannyReducer } from './nannysSlice.js';
import { favoriteReducer } from './favoriteSlice.js';
import { filterReducer } from './filterSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PERSIST,
  PURGE,
  PAUSE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    teachers: nannyReducer,
    filter: filterReducer,
    favorites: persistReducer(persistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
