import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk('greetings/fetchMessage', async () => {
  const response = await fetch('/api/v1/greetings');
  const data = await response.json();
  return data;
});

const initialState = {
  message: '',
  loading: false,
  error: null,
};

export const messageSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
