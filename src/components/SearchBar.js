import React from 'react';
import { SearchBarContainer, SearchBarInput, SearchBarButton } from './Styles';

export const SearchBar = ({ onChange, onClick, onKeyDown }) => {
  return (
    <SearchBarContainer>
      <SearchBarInput
        placeholder="Search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
      ></SearchBarInput>
      <SearchBarButton onClick={onClick}>Search</SearchBarButton>
    </SearchBarContainer>
  );
};
