"use client";

import { FC } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Search } = Input;

interface SearchInputProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  loading?: boolean;
  size?: "large" | "middle" | "small";
  allowClear?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const StyledSearch = styled(Search)`
  .ant-input-affix-wrapper {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch,
  loading = false,
  size = "middle",
  allowClear = true,
  value,
  onChange,
}) => {
  return (
    <StyledSearch
      placeholder={placeholder}
      allowClear={allowClear}
      onSearch={onSearch}
      loading={loading}
      size={size}
      prefix={<SearchOutlined />}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
