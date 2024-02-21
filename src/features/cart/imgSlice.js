// imgSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

// Define an asynchronous thunk to fetch data from the API
export const fetchImages = createAsyncThunk('img/fetchImages', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
});

// Create the imgSlice
const imgSlice = createSlice({
  name: 'img',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



// Export the reducer
export default imgSlice.reducer;
