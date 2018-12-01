import React from 'react';
import { Switch, Route } from 'react-router-dom';
import homeUser from '../components/users/homeUser';
import Login from '../components/users/Login';
import Register from '../components/users/Register'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'/>
        <Route path='/login' component={Login} />
        <Route path='/homeUser' component={homeUser} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

export default Routes;