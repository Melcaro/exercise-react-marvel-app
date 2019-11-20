import React, { Component } from 'react';

import {
  CharacterPageStyle,
  CharacterImg,
  CharacterInfos,
  CharacterName,
  CharacterDetails,
} from './Styles';

export class CharacterPage extends Component {
  render() {
    return (
      <CharacterPageStyle>
        <CharacterImg />
        <CharacterInfos>
          <CharacterName />
          <CharacterDetails />
        </CharacterInfos>
      </CharacterPageStyle>
    );
  }
}
