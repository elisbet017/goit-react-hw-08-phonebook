import { createSlice } from '@reduxjs/toolkit';
import {
  handleError,
  handleFulfilled,
  handlePending,
} from 'helpers/handlers';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('rejected'), handleError);
  },
});

export const rootReducer = rootSlice.reducer;
