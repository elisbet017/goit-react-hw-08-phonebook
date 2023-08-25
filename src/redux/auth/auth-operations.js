import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  reset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.reset();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      if (!authToken) {
        return rejectWithValue('');
      }
      token.set(authToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
