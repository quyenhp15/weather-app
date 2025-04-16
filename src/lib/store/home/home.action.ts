import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentWeathers, getForecastWeathers } from "@/api";

export const getCurrentWeathersThunk = createAsyncThunk(
  "home/getCurrentWeathersThunk",
  async (city: string) => {
    const weather = await getCurrentWeathers(city);
    return weather;
  }
);

export const getForecastWeathersThunk = createAsyncThunk(
  "home/getForecastWeathersThunk",
  async (city: string) => {
    return getForecastWeathers(city);
  }
);
