import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '../components/Search';
import Login from '../components/users/Login';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default Routes;