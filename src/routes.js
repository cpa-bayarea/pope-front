import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Results from './pages/Results';
import Results2 from './pages/Results2';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/results" component={Results} />
        <Route path="/results2" component={Results2} />
        {/* <Route path="/api/area" />
        <Route path="/organizations" />
        <Route path="/api/subarea" />
        <Route path="/api/query -like" /> */}
      </Switch>
    </BrowserRouter>
  );
}
