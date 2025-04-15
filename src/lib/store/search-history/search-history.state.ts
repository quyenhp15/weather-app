export type SearchHistoryState = {
  getSearchHistoriesStatus: string;
  searchHistories: any[];
};

export const initialSearchHistoryState: SearchHistoryState = {
  getSearchHistoriesStatus: 'idle',
  searchHistories: [],
};
