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
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10%;
`;

const Thumbnail = styled.div`
  border: 1px solid blue;
  flex: 0 0 30%;
  height: 38vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 3%;
`;

const ThumbnailsContainerImg = styled.div`
  flex: 1 1 100%;
`;

const ThumbnailImg = styled.img`
  width: 100%;
`;

const ThumbnailTitle = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const LinkToCharacterPage = styled(Link)`
  text-decoration: none;
`;

// CharacterPage

const CharacterPageStyle = styled.div`
  border: 1px solid black;
`;

const CharacterContainer = styled.div``;

const CharacterImgContainer = styled.div``;

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
  LinkToCharacterPage,
  ThumbnailsContainerImg,
  ThumbnailImg,
  ThumbnailTitle,
  CharacterPageStyle,
  CharacterContainer,
  CharacterImgContainer,
  CharacterImg,
  CharacterInfos,
  CharacterName,
  CharacterDetails,
};
