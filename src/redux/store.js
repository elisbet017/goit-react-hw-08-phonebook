import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contacts-slice';
import { filterReducer } from './contacts/filter-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/auth-slice';
import { rootReducer } from './root/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
    root: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'your/action/type',
        ],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);