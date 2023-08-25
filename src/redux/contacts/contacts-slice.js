import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleFulfilled,
  handleGetAllContactsFulfilled,
} from 'helpers/handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, handleGetAllContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
  },
});

export const contactReducer = contactsSlice.reducer;