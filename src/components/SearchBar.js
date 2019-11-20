import React, { Component } from 'react';
import { SearchBarContainer, SearchBarInput, SearchBarButton } from './Styles';

export class SearchBar extends Component {
  render() {
    return (
      <SearchBarContainer>
        <SearchBarInput placeholder="Search"></SearchBarInput>
        <SearchBarButton>Search</SearchBarButton>
      </SearchBarContainer>
    );
  }
}
