import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppTitle } from './AppTitle';
import { SearchBar } from './SearchBar';
import { ResultsContainer } from './ResultsContainer';
import { CharacterPage } from './CharacterPage';
import { fetchMarvelCharacters } from './../services/FetchMarvelCharacters';

class App extends React.Component {
  state = {
    userInput: '',
    searchResults: [],
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
      searchResults: results,
    });
    console.log(this.state.searchResults);
  };

  render() {
    const {
      state: { searchResults },
    } = this;
    return (
      <BrowserRouter>
        <Route path="/" component={AppTitle} />
        <Route
          path="/"
          render={() => (
            <SearchBar
              onChange={this.onInputChange}
              onKeyDown={this.onKeyDown}
              onClick={this.startSearch}
            />
          )}
        />
        <Route
          path="/"
          render={() => <ResultsContainer value={searchResults} />}
        />
        <Route path="/character/:characterId" component={CharacterPage} />
      </BrowserRouter>
    );
  }
}

export default App;
