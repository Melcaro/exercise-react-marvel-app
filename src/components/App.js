import React from 'react';

import { AppTitle } from './AppTitle';
import { SearchBar } from './SearchBar';
import { CharacterPage } from './CharacterPage';
import { fetchMarvelCharacters } from './../services/FetchMarvelCharacters';

import { AppStyle } from './Styles';

class App extends React.Component {
  state = {
    userInput: '',
    character: [],
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({
      userInput: value,
    });
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.startSearch();
    }
  };

  startSearch = async () => {
    const {
      data: {
        data: { results },
      },
    } = await fetchMarvelCharacters(this.state.userInput);
    this.setState({
      character: results,
    });
  };

  render() {
    return (
      <AppStyle>
        <AppTitle />
        <SearchBar
          onChange={this.onInputChange}
          onKeyDown={this.onKeyDown}
          onClick={this.startSearch}
        />
        <CharacterPage character={this.state.character} />
      </AppStyle>
    );
  }
}

export default App;
