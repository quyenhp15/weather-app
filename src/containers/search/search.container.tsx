"use client";

import { SearchInput } from "@/lib/components";
import { RequestStatus } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getSearchHistories, searchWeatherByCity } from "@/lib/store";
import { Typography } from "antd";
import { useEffect } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
`;

const StyledText = styled(Typography.Text)`
  color: "red";
`;

const SearchHistoryContainer = () => {
  const appDispatch = useAppDispatch();
  const { searchWeatherStatus } = useAppSelector(
    (state) => state.searchHistory
  );

  useEffect(() => {
    appDispatch(getSearchHistories());
  }, [appDispatch]);

  const handleSearch = (value: string) => {
    appDispatch(searchWeatherByCity(value));
  };

  return (
    <Wrapper>
      <SearchInput onSearch={handleSearch} />
      {searchWeatherStatus !== RequestStatus.ERROR && (
        <StyledText type="danger">Error Input</StyledText>
      )}
    </Wrapper>
  );
};

export default SearchHistoryContainer;
