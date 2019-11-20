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
    characterInfos: [],
  };
  async componentDidMount() {
    console.log(this.props);
    const {
      props: {
        match: {
          params: { characterId },
        },
      },
    } = this;
    console.log(characterId);

    const {
      data: {
        data: { results },
      },
    } = await fetchMarvelCharacterById(characterId);
    this.setState({
      characterInfos: results,
    });
    console.log(this.state);

    console.log(await fetchMarvelCharacterById(characterId));
  }

  render() {
    const {
      state: { characterInfos },
    } = this;
    return (
      <CharacterPageStyle>
        {characterInfos.map(
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
        ;
      </CharacterPageStyle>
    );
  }
}
