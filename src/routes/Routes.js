import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../components/users/Login';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'/>
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default Routes;