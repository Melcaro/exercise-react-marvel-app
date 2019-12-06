import styled from 'styled-components';

// AppTitle

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppTitleStyle = styled.h1`
  flex: 1 1 5%;
  font-weight: bold;
  font-size: 40px;
  color: red;
`;

// SearchBar

const SearchBarContainer = styled.div`
  flex: 1 1 5%;
`;

const SearchBarInput = styled.input`
  border-radius: 5px;
`;

const SearchBarButton = styled.button`
  border-radius: 5px;
`;

// CharacterPage

const CharacterPageStyle = styled.div`
  flex: 0 1 40%;
  margin-top: 5%;
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1%;
`;

const CharacterImgContainer = styled.div`
  flex: 0 1 30%;
  width: 50%;
`;

const CharacterImg = styled.img`
  width: 100%;
`;

const CharacterInfos = styled.div`
  flex: 0 1 30%;
  margin-left: 1%;
`;

const CharacterName = styled.h1``;

const CharacterDetails = styled.p``;

export {
  AppTitleStyle,
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton,
  CharacterPageStyle,
  CharacterContainer,
  CharacterImgContainer,
  CharacterImg,
  CharacterInfos,
  CharacterName,
  CharacterDetails,
};
