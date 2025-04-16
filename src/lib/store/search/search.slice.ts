import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialSearchHistoryState, SearchState } from "./search.state";
import { RequestStatus } from "@/lib/constants";
import { getCurrentWeathers } from "@/api";

const STORAGE_KEY = "weather-search-history";
const getLocalStorage = () => {
  const cachedData = localStorage.getItem(STORAGE_KEY);
  return cachedData?.replace(/"/g, "")?.split(",") ?? [];
};
export const getSearchHistories = createAsyncThunk(
  "search-history/getSearchHistories",
  async () => {
    return getLocalStorage();
  }
);

export const searchWeatherByCity = createAsyncThunk(
  "home/getCurrentWeathersThunk",
  async (city: string) => {
    try {
      const weather = await getCurrentWeathers(city);

      const cachedData = getLocalStorage();
      if (!cachedData.includes(city)) {
        const newCachedData = cachedData ? `${cachedData},${city}` : city;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCachedData));
      }

      return weather;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const searchHistorySlice = createSlice({
  name: "search-history",
  initialState: initialSearchHistoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      searchWeatherByCity.pending,
      (state: SearchState, action) => {
        state.searchWeatherStatus = RequestStatus.EXECUTE;
        state.query = action.payload;
      }
    );
    builder.addCase(
      searchWeatherByCity.fulfilled,
      (state: SearchState, action) => {
        state.searchWeatherStatus = RequestStatus.SUCCESS;
        state.weather = action.payload;
        state.searchHistories = [...state.searchHistories, state.query ?? ""];
      }
    );
    builder.addCase(searchWeatherByCity.rejected, (state: SearchState) => {
      state.searchWeatherStatus = RequestStatus.ERROR;
    });

    builder.addCase(
      getSearchHistories.fulfilled,
      (state: SearchState, action) => {
        state.searchHistories = action.payload;
      }
    );
  },
});

export default searchHistorySlice.reducer;
