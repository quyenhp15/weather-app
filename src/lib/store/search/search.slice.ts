import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialSearchHistoryState, SearchState } from "./search.state";
import { RequestStatus } from "@/lib/constants";
import { getCurrentWeathers } from "@/api";

export const getSearchHistories = createAsyncThunk(
  "search-history/getSearchHistories",
  async () => {
    return [];
  }
);

const STORAGE_KEY = "weather-search-history";
export const saveQuery = createAsyncThunk(
  "search-history/saveQuery",
  (query: string) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(query));
  }
);

export const searchWeatherByCity = createAsyncThunk(
  "home/getCurrentWeathersThunk",
  async (city: string) => {
    const weather = await getCurrentWeathers(city);
    return weather;
  }
);

const searchHistorySlice = createSlice({
  name: "search-history",
  initialState: initialSearchHistoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveQuery.pending, (state: SearchState) => {
      state.saveQueryStatus = RequestStatus.EXECUTE;
    });
    builder.addCase(saveQuery.fulfilled, (state) => {
      state.saveQueryStatus = RequestStatus.SUCCESS;
    });
    builder.addCase(saveQuery.rejected, (state) => {
      state.saveQueryStatus = RequestStatus.ERROR;
    });

    builder.addCase(searchWeatherByCity.pending, (state: SearchState) => {
      state.searchWeatherStatus = RequestStatus.EXECUTE;
    });
    builder.addCase(
      searchWeatherByCity.fulfilled,
      (state: SearchState, action) => {
        state.searchWeatherStatus = RequestStatus.SUCCESS;
        state.weather = action.payload;
      }
    );
    builder.addCase(
      searchWeatherByCity.rejected,
      (state: SearchState, action) => {
        state.searchWeatherStatus = RequestStatus.ERROR;
      }
    );
  },
});

export default searchHistorySlice.reducer;
