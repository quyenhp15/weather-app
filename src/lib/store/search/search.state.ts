import { RequestStatus } from "@/lib/constants";
import { Weather } from "@/lib/models";

export type SearchHistoryState = {
  getSearchHistoriesStatus?: RequestStatus;
  searchHistories?: string[];
};

export type SaveQueryState = {
  saveQueryStatus?: RequestStatus;
};

export type SearchWeather = {
  weather?: Weather;
  searchWeatherStatus?: RequestStatus;
};

export type SearchState = SearchHistoryState & SaveQueryState & SearchWeather;

export const initialSearchHistoryState: SearchState = {
  getSearchHistoriesStatus: undefined,
  searchHistories: [],
  saveQueryStatus: undefined,
  weather: undefined,
  searchWeatherStatus: undefined,
};
