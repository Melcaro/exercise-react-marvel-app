import React, { Component } from 'react';

import { fetchMarvelCharacterById } from './../services/FetchMarvelCharacterById';

import {
  CharacterPageStyle,
  CharacterContainer,
  CharacterImgContainer,
  CharacterImg,
  CharacterInfos,
  CharacterName,
  CharacterDetails,
} from './Styles';

export class CharacterPage extends Component {
  state = {
    character: null,
  };

  componentDidUpdate({ character: { id: oldId } }, prevState) {
    this.fetchCharacter(oldId);
  }

  fetchCharacter = async oldId => {
    if (oldId !== this.props.character.id) {
      const character = await fetchMarvelCharacterById(this.props.character.id);
      this.setState({
        character,
      });
    }
  };

  render() {
    const { character } = this.props;
    return (
      <CharacterPageStyle>
        {character.map(
          ({ id, name, description, thumbnail: { path, extension } }) => (
            <CharacterContainer key={id}>
              <CharacterImgContainer>
                <CharacterImg alt="character" src={`${path}.${extension}`} />
              </CharacterImgContainer>
              <CharacterInfos>
                <CharacterName>{name}</CharacterName>
                <CharacterDetails>{description}</CharacterDetails>
              </CharacterInfos>
            </CharacterContainer>
          )
        )}
        
      </CharacterPageStyle>
    );
  }
}
