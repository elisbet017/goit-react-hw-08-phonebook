import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from './operations';
import { handleAddContactFulfilled, handleDeleteContactFulfilled, handleError, handleFulfilled, handleGetAllContactsFulfilled, handlePending } from 'helpers/handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, handleGetAllContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('rejected'), handleError);
  },
});

export const contactReducer = contactsSlice.reducer;