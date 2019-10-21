import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Results from './pages/Results';
import ResultsOld from './pages/ResultsOld';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/results" component={Results} />
        <Route path="/resultsOld" component={ResultsOld} />
      </Switch>
    </BrowserRouter>
  );
}
