import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialSearchHistoryState } from './search-history.state';

export const getSearchHistories = createAsyncThunk(
  'search-history/getSearchHistories',
  async () => {
    return [];
  }
);

const searchHistorySlice = createSlice({
  name: 'search-history',
  initialState: initialSearchHistoryState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSearchHistories.pending, state => {});
    builder.addCase(getSearchHistories.fulfilled, (state, action) => {});
    builder.addCase(getSearchHistories.rejected, (state, action) => {});
  },
});

export default searchHistorySlice.reducer;
