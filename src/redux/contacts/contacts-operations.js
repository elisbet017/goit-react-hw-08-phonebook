import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);