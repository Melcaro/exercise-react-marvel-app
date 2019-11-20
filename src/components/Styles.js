import styled from 'styled-components';
import { Link } from 'react-router-dom';

// AppTitle

const AppTitleStyle = styled.h1`
  margin: 0 auto;
  font-weight: bold;
  font-size: 20px;
`;

// SearchBar

const SearchBarContainer = styled.div`
  border: 1px solid black;
`;

const SearchBarInput = styled.input``;

const SearchBarButton = styled.button``;

// ResultsContainer

const ThumbnailsContainer = styled.div`
  border: 1px solid black;
`;

const Thumbnail = styled.div`
  border: 1px solid blue;
`;

const ThumbnailsContainerImg = styled.img``;

const ThumbnailTitle = styled.span``;

// CharacterPage

const CharacterPageStyle = styled.div`
  border: 1px solid black;
`;

const CharacterImg = styled.img``;

const CharacterInfos = styled.div`
  border: 1px solid black;
`;

const CharacterName = styled.h1``;

const CharacterDetails = styled.p``;

export {
  AppTitleStyle,
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton,
  ThumbnailsContainer,
  Thumbnail,
  ThumbnailsContainerImg,
  ThumbnailTitle,
  CharacterPageStyle,
  CharacterImg,
  CharacterInfos,
  CharacterName,
  CharacterDetails,
};
