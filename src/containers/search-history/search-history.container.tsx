'use client';

import { SearchInput } from '@/lib/components';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getSearchHistories } from '@/lib/store/search-history/search-history.slice';
import { useEffect } from 'react';

const SearchHistoryContainer = () => {
  const appDispatch = useAppDispatch();
  const { searchHistories } = useAppSelector(state => state.searchHistory);

  console.log(searchHistories);

  useEffect(() => {
    appDispatch(getSearchHistories());
  }, [appDispatch]);

  return <SearchInput onSearch={() => {}} />;
};

export default SearchHistoryContainer;
