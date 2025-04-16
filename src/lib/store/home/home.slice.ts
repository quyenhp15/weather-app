import { RequestStatus } from "@/lib/constants";
import { createSlice } from "@reduxjs/toolkit";
import { HomeState, initialHomeState } from "./home.state";
import {
  getCurrentWeathersThunk,
  getForecastWeathersThunk,
} from "./home.action";

const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeathersThunk.pending, (state: HomeState) => {
        state.getCurrentWeatherStatus = RequestStatus.EXECUTE;
      })
      .addCase(
        getCurrentWeathersThunk.fulfilled,
        (state: HomeState, action) => {
          state.getCurrentWeatherStatus = RequestStatus.SUCCESS;
          state.currentWeather = action.payload;
        }
      )
      .addCase(getCurrentWeathersThunk.rejected, (state: HomeState, action) => {
        state.getCurrentWeatherStatus = RequestStatus.ERROR;
        state.getCurrentWeatherError = action.error.message;
      })

      // Forecast Weather
      .addCase(getForecastWeathersThunk.pending, (state: HomeState) => {
        state.getForecastWeatherStatus = RequestStatus.EXECUTE;
      })
      .addCase(
        getForecastWeathersThunk.fulfilled,
        (state: HomeState, action) => {
          state.getForecastWeatherStatus = RequestStatus.SUCCESS;
          state.forecastWeathers = action.payload;
        }
      )
      .addCase(
        getForecastWeathersThunk.rejected,
        (state: HomeState, action) => {
          state.getForecastWeatherStatus = RequestStatus.ERROR;
          state.getForecastWeatherError = action.error.message;
        }
      );
  },
});

export default homeSlice.reducer;
