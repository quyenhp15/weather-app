import { RequestStatus } from "@/lib/constants";
import { Weather } from "@/lib/models";

export type SearchHistoryState = {
  searchHistories: string[];
};

export type SearchWeather = {
  weather?: Weather;
  searchWeatherStatus?: RequestStatus;
  query?: string;
};

export type SearchState = SearchHistoryState & SearchWeather;

export const initialSearchHistoryState: SearchState = {
  searchHistories: [],
  weather: undefined,
  searchWeatherStatus: undefined,
  query: "",
};
