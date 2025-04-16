"use client";

import { SearchInput } from "@/lib/components";
import { RequestStatus } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getSearchHistories, searchWeatherByCity } from "@/lib/store";
import { Card, List, Typography } from "antd";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const { Text } = Typography;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
`;

const StyledListItem = styled(List.Item)`
  cursor: pointer;
`;

const SearchHistoryContainer = () => {
  const appDispatch = useAppDispatch();
  const { searchWeatherStatus, searchHistories } = useAppSelector(
    (state) => state.searchHistory
  );

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    appDispatch(getSearchHistories());
  }, [appDispatch]);

  const handleSearch = (value: string) => {
    appDispatch(searchWeatherByCity(value));
  };

  useEffect(() => {
    console.log("searchWeatherStatus", searchWeatherStatus);
  }, [searchWeatherStatus]);

  return (
    <Wrapper>
      <SearchInput
        onSearch={handleSearch}
        value={searchValue}
        onChange={(value) => setSearchValue(value)}
      />
      {searchWeatherStatus === RequestStatus.ERROR && (
        <Text type="danger">Error Input</Text>
      )}

      <Card title="List of Histories" style={{ marginTop: 24 }}>
        <List
          bordered
          dataSource={searchHistories}
          renderItem={(item) => (
            <StyledListItem onClick={() => setSearchValue(item)}>
              <Text>{item}</Text>
            </StyledListItem>
          )}
        />
      </Card>
    </Wrapper>
  );
};

export default SearchHistoryContainer;
