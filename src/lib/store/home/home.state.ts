import { RequestStatus } from "@/lib/constants";
import { Weather } from "@/lib/models";

export type GetCurrentWeatherState = {
  getCurrentWeatherStatus?: RequestStatus;
  getCurrentWeatherError?: string;
  currentWeather?: Weather;
};

export type GetForecastWeatherState = {
  getForecastWeatherStatus?: RequestStatus;
  getForecastWeatherError?: string;
  forecastWeathers?: Weather[];
};

export type HomeState = GetCurrentWeatherState & GetForecastWeatherState;

export const initialHomeState: HomeState = {
  getCurrentWeatherStatus: undefined,
  getCurrentWeatherError: undefined,
  currentWeather: undefined,

  getForecastWeatherStatus: undefined,
  getForecastWeatherError: undefined,
  forecastWeathers: [],
};
