import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/home.slice";
import searchHistoryReducer from "./search/search.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      home: homeReducer,
      searchHistory: searchHistoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
