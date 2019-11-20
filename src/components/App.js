import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppTitle } from './AppTitle';
import { SearchBar } from './SearchBar';
import { ResultsContainer } from './ResultsContainer';
import { CharacterPage } from './CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={AppTitle} />
      <Route path="/" component={SearchBar} />
      <Route path="/" component={ResultsContainer} />
      <Route path="/character/:characterId" component={CharacterPage} />
    </BrowserRouter>
  );
}

export default App;
